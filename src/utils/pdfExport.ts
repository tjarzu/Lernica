import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export const generateLessonPlanPDF = (lesson: {
  title: string;
  subject: string;
  grade: string;
  duration: string;
  objectives: string[];
  description: string;
  activities: {
    name: string;
    duration: string;
    description: string;
  }[];
  resources: {
    name: string;
    type: string;
    url: string;
  }[];
}) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPos = 20;

  // Title
  doc.setFontSize(20);
  doc.text(lesson.title, margin, yPos);
  yPos += 10;

  // Subject and Grade
  doc.setFontSize(12);
  doc.text(`${lesson.subject} - ${lesson.grade} - ${lesson.duration}`, margin, yPos);
  yPos += 15;

  // Description
  doc.setFontSize(12);
  doc.text('Description:', margin, yPos);
  yPos += 7;
  const descriptionLines = doc.splitTextToSize(lesson.description, pageWidth - 2 * margin);
  doc.text(descriptionLines, margin, yPos);
  yPos += descriptionLines.length * 7 + 10;

  // Objectives
  doc.setFontSize(14);
  doc.text('Learning Objectives:', margin, yPos);
  yPos += 10;
  doc.setFontSize(12);
  lesson.objectives.forEach(objective => {
    doc.text(`• ${objective}`, margin + 5, yPos);
    yPos += 7;
  });
  yPos += 5;

  // Activities
  doc.setFontSize(14);
  doc.text('Activities:', margin, yPos);
  yPos += 10;
  doc.setFontSize(12);
  lesson.activities.forEach((activity, index) => {
    // Check if we need a new page
    if (yPos > doc.internal.pageSize.getHeight() - 40) {
      doc.addPage();
      yPos = 20;
    }

    doc.text(`${index + 1}. ${activity.name} (${activity.duration})`, margin, yPos);
    yPos += 7;
    const activityLines = doc.splitTextToSize(activity.description, pageWidth - 2 * margin - 10);
    doc.text(activityLines, margin + 10, yPos);
    yPos += activityLines.length * 7 + 5;
  });

  // Resources
  if (lesson.resources.length > 0) {
    // Check if we need a new page
    if (yPos > doc.internal.pageSize.getHeight() - 40) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.text('Resources:', margin, yPos);
    yPos += 10;
    doc.setFontSize(12);
    lesson.resources.forEach(resource => {
      doc.text(`• ${resource.name} (${resource.type})`, margin + 5, yPos);
      yPos += 7;
    });
  }

  return doc;
};

export const generateAnalyticsReport = async () => {
  const doc = new jsPDF('p', 'px', 'a4');
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let currentPage = 1;

  try {
    // Capture the analytics content
    const analyticsContent = document.querySelector('.analytics-content');
    if (!analyticsContent) return;

    // Convert the content to canvas
    const canvas = await html2canvas(analyticsContent as HTMLElement, {
      scale: 2,
      useCORS: true,
      logging: false,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    // Calculate dimensions
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    doc.addImage(
      canvas.toDataURL('image/png'),
      'PNG',
      0,
      position,
      imgWidth,
      imgHeight,
      undefined,
      'FAST'
    );
    heightLeft -= pageHeight;

    // Add subsequent pages if content overflows
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      doc.addPage();
      currentPage++;
      doc.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight,
        undefined,
        'FAST'
      );
      heightLeft -= pageHeight;
    }

    // Add page numbers
    const totalPages = currentPage;
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setTextColor(128, 128, 128);
      doc.text(
        `Page ${i} of ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }

    return doc;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return null;
  }
};
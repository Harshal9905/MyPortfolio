function showProjectPopup(project) {
    const popup = document.getElementById('popup-project');
    const popupDetail = document.getElementById('popup-project-detail');
    
    let projectDetails = '';

    if (project === 'chatbot') {
        projectDetails = `
            <h2>Collage Chatbot</h2>
            <p>Led the development of a Python chatbot project, aiming to enhance user experience for students.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Python Implementation: Built using Python for its simplicity and flexibility.</li>
                <li>NLP Toolkit: Integrated NLP tools like word_tokenize and stemming for effective user interaction.</li>
                <li>Machine Learning Integration: Included a Feed Forward Neural Network for continual improvement of responses.</li>
                <li>Speech Recognition: Enabled speech-to-text conversion for voice interaction.</li>
                <li>Optimized Information Retrieval: Structured data sources for quick and accurate responses.</li>
                <li>Frontend Development: Developed the frontend with HTML, CSS, and JavaScript for an intuitive user interface.</li>
            </ul>
        `;
    } else if (project === 'lms') {
        projectDetails = `
            <h2>Library Management System</h2>
            <p>This LMS efficiently manages books, borrowers, and loans, enhancing library operations.</p>
            <p><strong>Key Features:</strong></p>
            <ul>
                <li>Book Management: Add, update, delete, and search books by title, author, or genre.</li>
                <li>Borrower Management: Register and manage borrower details.</li>
                <li>Loan Management: Track loan status, due dates, and overdue books.</li>
                <li>Reporting: Generate reports on book inventory, overdue books, and borrowing trends.</li>
                <li>User Interface: Designed with a user-friendly interface for ease of use.</li>
                <li>Backend Support: Built with Spring Boot for robust backend functionality.</li>
            </ul>
        `;
    }

    popupDetail.innerHTML = projectDetails;
    popup.style.display = 'block';
}

function closeProjectPopup() {
    document.getElementById('popup-project').style.display = 'none';
}

function showCertPopup(certId) {
    const popupCert = document.getElementById('popup-cert');
    const popupCertImage = document.getElementById('popup-cert-image');
    
    let certImageSrc = '';

    if (certId === 'cert1') {
        certImageSrc = 'Image/PythonCertificate_page-0001.jpg'; 
    } else if (certId === 'cert2') {
        certImageSrc = 'Image/SYMBFullStackJava_page-0001.jpg'; 
    }

    popupCertImage.src = certImageSrc;
    popupCert.style.display = 'flex';
}

function closeCertPopup() {
    document.getElementById('popup-cert').style.display = 'none';
}

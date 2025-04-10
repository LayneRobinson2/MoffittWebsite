// Enhanced script for dark theme with Prism.js integration
document.addEventListener('DOMContentLoaded', function() {
    // Prism.js is loaded via CDN and will automatically highlight code
    // We don't need to manually highlight code anymore
    
    // Add animation to the step number
    const stepNumber = document.querySelector('.step-number');
    if (stepNumber) {
        stepNumber.classList.add('animated');
    }
    
    /*
    document.addEventListener('mousemove', function(e) {
        if (!stepNumber) return;
        
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        
        stepNumber.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    */
   
    // Add smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
    
    // Add interactive elements to the page
    function addInteractiveElements() {
        // Make code container interactive
        const codeContainer = document.querySelector('.code-container');
        if (codeContainer) {
            codeContainer.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
        }
        
        // Add tooltips to technical terms
        const technicalTerms = [
            { term: 'Source Code', explanation: 'Text instructions written by programmers in a programming language' },
            { term: 'Programming Language', explanation: 'A formal language with specific syntax used to write software' },
            { term: 'JavaScript', explanation: 'A popular programming language used for web development' }
        ];
        
        // Find these terms in paragraphs and add tooltips
        document.querySelectorAll('p').forEach(paragraph => {
            technicalTerms.forEach(({ term, explanation }) => {
                // Only replace if not already in a tooltip or strong tag
                const regex = new RegExp(`(?<!<[^>]*)(${term})(?![^<]*>)`, 'g');
                paragraph.innerHTML = paragraph.innerHTML.replace(
                    regex, 
                    `<span data-tooltip="${explanation}">$1</span>`
                );
            });
        });
    }
    
    // Call the function to add interactive elements
    // Commented out to avoid potential HTML parsing issues
    // addInteractiveElements();
    
    // Add a subtle animation to the navigation buttons
    const nextButton = document.querySelector('.button.next');
    if (nextButton) {
        nextButton.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'translateX(5px)';
            this.querySelector('i').style.transition = 'transform 0.3s';
        });
        
        nextButton.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'translateX(0)';
        });
    }
    
    // Optional: Add a "copy code" button to code blocks
    function addCopyCodeButton() {
        const codeBlock = document.querySelector('pre');
        if (!codeBlock) return;
        
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Position the button
        copyButton.style.position = 'absolute';
        copyButton.style.top = '10px';
        copyButton.style.right = '10px';
        copyButton.style.background = 'rgba(0,0,0,0.3)';
        copyButton.style.color = '#fff';
        copyButton.style.border = 'none';
        copyButton.style.borderRadius = '4px';
        copyButton.style.padding = '5px 8px';
        copyButton.style.cursor = 'pointer';
        copyButton.style.zIndex = '5';
        copyButton.style.opacity = '0';
        copyButton.style.transition = 'opacity 0.3s';
        
        codeBlock.style.position = 'relative';
        codeBlock.appendChild(copyButton);
        
        // Show button on hover
        codeBlock.addEventListener('mouseenter', function() {
            copyButton.style.opacity = '1';
        });
        
        codeBlock.addEventListener('mouseleave', function() {
            copyButton.style.opacity = '0';
        });
        
        // Copy functionality
        copyButton.addEventListener('click', function() {
            const code = codeBlock.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(function() {
                // Success feedback
                const originalText = copyButton.innerHTML;
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(function() {
                    copyButton.innerHTML = originalText;
                }, 2000);
            });
        });
    }
    
    // Add copy code button
    addCopyCodeButton();
});
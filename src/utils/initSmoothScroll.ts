/**
 * Initialize smooth scrolling behavior for hash links
 * This helps when the page loads with a hash in the URL
 */
export const initSmoothScroll = (): void => {
  // Header offset in pixels
  const headerOffset = 80;

  // Function to handle scrolling with offset
  const scrollWithOffset = (elementId: string): void => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Check if we have a hash in the URL on page load
  if (window.location.hash) {
    // Get the target element ID by removing the # character
    const targetId = window.location.hash.substring(1);
    
    // Wait for elements to be fully loaded and rendered
    setTimeout(() => {
      scrollWithOffset(targetId);
    }, 300); // Small delay to ensure DOM is ready
  }

  // Note: We're NOT adding global event listeners for all hash links
  // to avoid interfering with the standard anchor link behavior
  // This allows the browser's default scrolling to work as expected
  // and prevents events from being overridden
}; 
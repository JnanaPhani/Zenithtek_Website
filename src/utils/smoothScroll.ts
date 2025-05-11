/**
 * Utility function for smooth scrolling to page sections
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Get the element's position
    const elementPosition = element.getBoundingClientRect().top;
    // Get the current scroll position
    const offsetPosition = elementPosition + window.pageYOffset;
    
    // Apply an offset to account for fixed header (adjust the -80 value as needed)
    const headerOffset = -80;
    
    // Scroll to the adjusted position
    window.scrollTo({
      top: offsetPosition + headerOffset,
      behavior: 'smooth'
    });
  }
};

/**
 * Event handler for smooth scrolling with links
 * @param e - The click event
 * @param sectionId - The ID of the section to scroll to
 */
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
): void => {
  e.preventDefault();
  scrollToSection(sectionId);
}; 
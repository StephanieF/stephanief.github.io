document.addEventListener('DOMContentLoaded', function () {
  // Sidebar links tracking
  const sidebarLinks = document.querySelectorAll('.sidebar .sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'sidebar_link_click',
          link_text: link.textContent.trim(),
          link_url: link.href
        });
      }
    });
  });

  // Project links tracking (on /projects page)
  if (location.pathname.endsWith('/projects.html') || location.pathname.endsWith('/projects/')) {
    // Select all links in the main content area
    const projectLinks = document.querySelectorAll('.theme-default-content a[href^="http"]');
    projectLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'project_link_click',
            link_text: link.textContent.trim(),
            link_url: link.href
          });
        }
      });
    });
  }
});
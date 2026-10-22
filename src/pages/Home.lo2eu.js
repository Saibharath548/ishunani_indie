import { THEME, applyElementTheme } from 'public/theme';
import { EMBED_HTML_URL } from 'public/danyzaky_embed';

$w.onReady(function () {
  // 1. Theme the canvas to Deep Aubergine
  try {
    if ($w('#page1')) {
      applyElementTheme($w('#page1'), { backgroundColor: THEME.colors.aubergineDark });
    }
  } catch (e) {}

  // 2. Collapse old unwanted template sections to eliminate the old template appearance
  const oldSectionsToCollapse = [
    '#section108',
    '#section6',
    '#Section1WidgetBookings',
    '#columnStrip104',
    '#columnStrip103'
  ];

  oldSectionsToCollapse.forEach(id => {
    try {
      if ($w(id)) {
        $w(id).collapse();
      }
    } catch (e) {}
  });

  // 3. Connect and expand the full-width Bento HTML Component
  const htmlComponents = ['#html4', '#html5', '#html6', '#html7', '#html8', '#html9'];
  htmlComponents.forEach(id => {
    try {
      if ($w(id)) {
        $w(id).expand();
        // Point the HTML component to the hosted Dany Zaky Bento application
        $w(id).src = EMBED_HTML_URL;
      }
    } catch (e) {}
  });
});

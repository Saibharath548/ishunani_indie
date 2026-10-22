import { THEME, applyElementTheme } from 'public/theme';
import { PROJECTS_DATA } from 'public/portfolioData';

$w.onReady(function () {
  initTheme();
  setupRepeater();
});

function initTheme() {
  try {
    if ($w('#page1')) applyElementTheme($w('#page1'), { backgroundColor: THEME.colors.aubergineDark });
    if ($w('#section1')) applyElementTheme($w('#section1'), { backgroundColor: THEME.colors.aubergineDark });
  } catch (e) {}

  try {
    if ($w('#projectTitle')) {
      $w('#projectTitle').html = `
        <div style="font-family: ${THEME.fonts.heading}; text-align: center; margin-bottom: 24px;">
          <span style="color: ${THEME.colors.marigoldPrimary}; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">Portfolio Index</span>
          <h1 style="font-size: 38px; font-weight: 800; color: ${THEME.colors.iceSilverHeading}; margin: 8px 0 0 0;">All Projects</h1>
        </div>
      `;
    }
  } catch (e) {}
}

function setupRepeater() {
  try {
    if ($w('#projectRepeater')) {
      $w('#projectRepeater').onItemReady(($item, itemData) => {
        // Theme the item container box
        if ($item('#box1')) {
          applyElementTheme($item('#box1'), {
            backgroundColor: THEME.colors.aubergineSurface,
            borderColor: THEME.colors.iceSilverBorder,
            borderWidth: '1px'
          });
        }

        // Title
        if ($item('#text1')) {
          $item('#text1').html = `
            <h3 style="font-family: ${THEME.fonts.heading}; font-size: 20px; font-weight: 700; color: ${THEME.colors.iceSilverHeading}; margin: 8px 0;">
              ${itemData.title || itemData.name || 'Project Title'}
            </h3>
          `;
        }

        // Short Description
        if ($item('#shortDescription')) {
          $item('#shortDescription').html = `
            <p style="font-family: ${THEME.fonts.body}; font-size: 14px; color: ${THEME.colors.iceSilverMuted}; line-height: 1.5; margin: 0;">
              ${itemData.shortDescription || itemData.description || ''}
            </p>
          `;
        }

        // Button
        if ($item('#readMoreBtn')) {
          $item('#readMoreBtn').label = "View Project →";
          applyElementTheme($item('#readMoreBtn'), {
            backgroundColor: THEME.colors.marigoldWarm,
            color: THEME.colors.aubergineDark
          });
        }
      });
    }
  } catch (e) {}
}

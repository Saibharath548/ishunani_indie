import { THEME, applyElementTheme } from 'public/theme';

$w.onReady(function () {
  try {
    if ($w('#page1')) applyElementTheme($w('#page1'), { backgroundColor: THEME.colors.aubergineDark });
  } catch (e) {}

  try {
    if ($w('#button1')) {
      $w('#button1').label = "← Back to Projects";
      applyElementTheme($w('#button1'), {
        backgroundColor: THEME.colors.aubergineSurface,
        color: THEME.colors.iceSilverBody
      });
    }

    if ($w('#previousBtn')) {
      applyElementTheme($w('#previousBtn'), {
        backgroundColor: THEME.colors.aubergineSurface,
        color: THEME.colors.marigoldPrimary
      });
    }

    if ($w('#nextBtn')) {
      applyElementTheme($w('#nextBtn'), {
        backgroundColor: THEME.colors.aubergineSurface,
        color: THEME.colors.marigoldPrimary
      });
    }
  } catch (e) {}
});

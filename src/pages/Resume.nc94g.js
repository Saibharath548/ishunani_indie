import { THEME, applyElementTheme } from 'public/theme';
import { PROFILE_DATA, EXPERIENCE_JOURNEY } from 'public/portfolioData';

$w.onReady(function () {
  try {
    if ($w('#page1')) applyElementTheme($w('#page1'), { backgroundColor: THEME.colors.aubergineDark });
    if ($w('#section1')) applyElementTheme($w('#section1'), { backgroundColor: THEME.colors.aubergineDark });
  } catch (e) {}
});

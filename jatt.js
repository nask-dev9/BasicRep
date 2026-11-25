function runMenuAction(action) {
    closeProfileMenu(true);
    switch (action) {
      case 'applications': goTo('#my-applications'); break;
      case 'saved':        goTo('#saved-jobs'); break;
      case 'alerts':       goTo('#job-alerts'); break;
      case 'match':        if (window.CandidateProfile) CandidateProfile.show(); else goTo('#candidate-profile-section'); break;
      case 'deadlines':    goTo('#deadlines'); break;
      case 'analytics':    goTo('#analytics-section'); break;
      case 'backup':       window.location.href = 'settings.html#data'; break;
      case 'settings':     window.location.href = 'settings.html#discovery'; break;
      case 'account':      window.location.href = 'settings.html#account'; break;
      case 'open-tracker': window.location.href = AFTER_AUTH_PAGE; break;
      case 'logout':       logout(); break;
      default:             if (action.indexOf('sp-') === 0) window.location.hash = action.slice(3);
    }
  }

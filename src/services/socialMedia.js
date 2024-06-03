/* global FB */

export const initFacebookSDK = () => {
  return new Promise(resolve => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: 'YOUR_APP_ID',
        cookie: true,
        xfbml: true,
        version: 'v10.0'
      });
      resolve();
    };
  });
};

export const shareOnFacebook = (url) => {
  if (window.FB) {
    window.FB.ui({
      method: 'share',
      href: url,
    }, function () {});
  } else {
    console.error('Facebook SDK not loaded.');
  }
};

// Twitter
export const shareOnTwitter = (text, url) => {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
};

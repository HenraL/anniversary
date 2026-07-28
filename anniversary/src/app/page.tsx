export default function RootPage() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){var s=window.location.search,u=new URLSearchParams(s),l=u.get("lang");if(l==="en"){window.location.replace("en/")}else if(!l){var n=(navigator.language||"").split("-")[0];window.location.replace((n==="fr"?"fr":"en")+"/")}})()`,
      }}
    />
  );
}

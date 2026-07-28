import PageContent from "./content";

export default function RootPage() {
  return (
    <>
      <PageContent lang="fr" />
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var s=window.location.search,u=new URLSearchParams(s),l=u.get("lang");if(l==="en"){window.location.replace("/en/")}else if(!l){var n=(navigator.language||"").split("-")[0];if(n!=="fr"){window.location.replace("/en/")}}})()`,
        }}
      />
    </>
  );
}

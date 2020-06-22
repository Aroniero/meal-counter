export const generatePage = (page) => {
  const siteHref = window.location.href;
  let WinPrint = window.open(`${siteHref}${page}`, "height=700,width=700");
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  setTimeout(() => {
    WinPrint.close();
  }, 1);
};

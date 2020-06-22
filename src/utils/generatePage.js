export const generatePage = (page) => {
 
    const siteHref = window.location.href;
    let WinPrint = window.open(`${siteHref}${page}`);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    // WinPrint.close();
};
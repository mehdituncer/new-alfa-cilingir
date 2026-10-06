export const serviceImages: Record<string,{src:string;small:string;alt:string}> = Object.fromEntries([
 ['kapi-acma','Aralık duran modern daire kapısı ve mavi anahtarlık tepsisindeki ev anahtarları'],
 ['oto-cilingir','Mavi bir aracın kapısı ve sahibinin elindeki otomobil anahtarı'],
 ['kasa-acma','Aydınlık bir ofiste kapalı çelik kasa'],
 ['kilit-degisimi','Yeni kapı kilidi silindirleri ve yedek anahtarlar'],
 ['kirik-anahtar-cikarma','İki parçaya ayrılmış ev anahtarı ve sağlam yedek anahtar'],
 ['celik-kapi-kilit-tamiri','Çelik daire kapısının metal kolu ve kilit silindiri'],
].map(([slug,alt])=>[slug,{src:`/images/services/${slug}.webp`,small:`/images/services/${slug}-640.webp`,alt:alt+'; temsili görsel'}]));
export const postImageKeys: Record<string,string> = {
 'kapida-kalinca-ne-yapmali':'kapi-acma',
 'anahtar-kilitte-kirildi':'kirik-anahtar-cikarma',
 'tasininca-kilit-degisimi':'kilit-degisimi',
};
export const regionImageKeys: Record<string,string> = {
 'beylikduzu-cilingir':'kapi-acma',
 'esenyurt-cilingir':'celik-kapi-kilit-tamiri',
 'buyukcekmece-cilingir':'kapi-acma',
 'avcilar-cilingir':'celik-kapi-kilit-tamiri',
 'bahcesehir-cilingir':'kapi-acma',
};

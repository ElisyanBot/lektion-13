function mobileMeny(){
    let navMenyBtn = document.getElementById('MenyBtn');
    let mobileMeny = document.getElementById('MobileMeny');

    if( mobileMeny.style.display === 'none'){
        mobileMeny.style.display = 'flex';
        navMenyBtn.style.backgroundColor = 'rgb(255, 190, 116)';
    }
    else{
        mobileMeny.style.display = 'none';
        navMenyBtn.style.background = 'none';
    }
}

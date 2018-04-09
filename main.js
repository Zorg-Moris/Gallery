"use strict";

//массив фото
let fotoArray = [
    "foto/chevrolet_corvette_1.jpg",
    "foto/chevrolet_corvette_2.jpg",
    "foto/chevrolet_corvette_3.jpg",
    "foto/Chevrolet_Corvette_all.jpg",
    "foto/Chevrolet-Corvette-1953.jpg",
    "foto/Chevrolet-corvette-1962.jpg",
    "foto/Chevrolet-corvette-1963.jpg",
    "foto/Chevrolet-corvette-1968.jpg",
    "foto/193px-1956_Chevrolet_Bel_Air_4_Door_Sedan_Front.jpg",
    "foto/193px-1967_Chevrolet_Camaro_RS_SS.jpg",
    "foto/193px-1971_Camaro_SS_(11).jpg",
    "foto/193px-1979_Chevrolet_Camaro_Z28_(8630991946).jpg",
    "foto/193px-Chevrolet_BelAir_Styleline_DeLuxe1952.jpg",
    "foto/193px-Flickr_-_DVS1mn_-_67_Chevrolet_Camaro_(2).jpg",
    "foto/198px-'69_Chevrolet_Camaro_Z28.jpg",
    "foto/218px-Chevrolet_Camaro_LT_(2837996263).jpg",
    "foto/220px-'67_Chevrolet_Camaro_SS_Convertible_(Auto_classique).jpg",
    "foto/220px-1954_Chevrolet_Bel_Air_2.-Door_HT_LRW466.jpg",
    "foto/220px-1957_Chevrolet_Bel_Air_2413_4-Door_ERL936.jpg",
    "foto/220px-1958_Chevrolet.jpg",
    "foto/220px-1970_Chevrolet_Camaro_Z28_-_Flickr_-_exfordy.jpg"
];

//выводит конкретный блок и фото в этом блоке
let fotoShow = (index) => `<div class = 'foto'>
<img src = ${fotoArray[index]}></div>`;

// выводим заданное количество фото на экран
function displayFoto(countFoto) {
    let str = "";
    for (let i = 0; i < countFoto; i++) {
        str += fotoShow(i);
    }
    $("#flex-container").html(str);
};

// рандомный выбор блока в котором будет замененно фото и выбор фото из массива фотографий для замены
function choiceRandomFoto(min, max) {
    return Math.floor(Math.random() * ((max) - min)) + min;
};

// меняем фото
function changeFoto(res, randFoto) {

    $(this[res]).fadeOut(3000, function () {
        $(this).fadeIn(2000).html(`<img src=${fotoArray[randFoto]}>`);
    });

};

//основная функция которая выполняет весь процесс
function mainChangeFoto() {

    //массив блоков которые будут выводится и в которых хранятся фото
    let arrayClass = [];

    //устанавливает общее количество фото в главном блоке flex-container
    let countFoto = 10;

    displayFoto(countFoto);

    arrayClass = $(".foto");

    setInterval(() => {

        let res = choiceRandomFoto(0, countFoto);
        let randFoto = choiceRandomFoto(0, fotoArray.length);

        changeFoto.call(arrayClass, res, randFoto);

    }, 5000);

};

mainChangeFoto();
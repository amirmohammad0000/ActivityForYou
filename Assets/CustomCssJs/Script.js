"use strict";

let TdActivity = document.querySelector(".td_activity");
let TdType = document.querySelector(".td_type");
let TdParticipants = document.querySelector(".td_participants");
let TdPrice = document.querySelector(".td_price");
let TdLink = document.querySelector(".td_link");
let TdAccessibility = document.querySelector(".td_accessibility");
let ButtonCreateActivity = document.querySelector(".button_create_activity");

ButtonCreateActivity.addEventListener("click", () => {
    fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then((data) => {
            if (data.activity) {
                TdActivity.innerHTML = data.activity;
            } else {
                TdActivity.innerHTML = "Null";
            }

            if (data.type) {
                TdType.innerHTML = data.type;
            } else {
                TdType.innerHTML = "Null";
            }

            if (data.participants) {
                TdParticipants.innerHTML = data.participants;
            } else {
                TdParticipants.innerHTML = "Null";
            }

            if (data.price) {
                TdPrice.innerHTML = data.price;
            } else {
                TdPrice.innerHTML = "Null";
            }

            if (data.link) {
                TdLink.innerHTML = data.link;
            } else {
                TdLink.innerHTML = "Null";
            }

            if (data.accessibility) {
                TdAccessibility.innerHTML = data.accessibility;
            } else {
                TdAccessibility.innerHTML = "Null";
            }
        });
});
let cardContainer = document.createElement("div");
cardContainer.className = "flex gap-6 p-6";
document.body.append(cardContainer);

function getusers() {
    fetch("https://randomuser.me/api/?results=3")
        .then((rawdata) => rawdata.json())
        .then((data) => {
            console.log(data.results);
            cardContainer.innerHTML = "";

            data.results.forEach(function (user) {
                let main = document.createElement("div");
                main.className = "flex-1";

                let card = document.createElement("div");
                card.className = "w-full h-full bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700";

                let top = document.createElement("div");
                top.className = "h-40 bg-gradient-to-r from-slate-700 to-slate-800";

                let content = document.createElement("div");
                content.className = "px-10 pb-10 -mt-16";

                let profileTop = document.createElement("div");
                profileTop.className = "flex items-end justify-between mb-6";

                let img = document.createElement("img");
                img.src = user.picture.large;
                img.alt = "User avatar";
                img.className = "h-28 w-28 rounded-lg border-4 border-slate-800 object-cover shadow-md";

                let button = document.createElement("button");
                button.textContent = "Connect";
                button.className = "bg-slate-700 text-white px-6 py-2 rounded-lg text-sm font-semibold";

                profileTop.append(img, button);

                let info = document.createElement("div");

                let h1 = document.createElement("h1");
                h1.textContent = user.name.first + " " + user.name.last;
                h1.className = "text-5xl font-bold text-slate-100";

                let details = document.createElement("div");
                details.className = "mt-6 space-y-2";

                let email = document.createElement("p");
                email.innerHTML = `<span class="font-semibold">Email:</span> ${user.email}`;
                email.className = "text-lg text-slate-300";

                let phone = document.createElement("p");
                phone.innerHTML = `<span class="font-semibold">Phone:</span> ${user.cell}`;
                phone.className = "text-lg text-slate-300";

                details.append(email, phone);

                info.append(h1, details);
                content.append(profileTop, info);
                card.append(top, content);
                main.append(card);

                cardContainer.append(main);
            });
        });
}

getusers();
document.querySelector("#refreshBtn").addEventListener("click", function () {
    getusers();
});

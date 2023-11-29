
        async function call(text){
            let lang1=selectTag[0].value;
          let lang2=selectTag[1].value;

          console.log(lang2)
            const a= await fetch(`https://api.mymemory.translated.net/get?q=${text}!&langpair=${lang1}|${lang2}`);
            const b=await a.json();
            console.log(b);
            c=b.responseData.translatedText;
            console.log(c);
            return c;
        }
      

        const selectTag=document.querySelectorAll("select");

        selectTag.forEach((tag, id) => {
            for (let country_code in countries) {
                let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
                let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
                tag.insertAdjacentHTML("beforeend", option);
            }
        });
        

const but=document.getElementById("mybut");
but.addEventListener("click",()=>
{
    const text=document.querySelector("#text1").value;
    const text2=document.querySelector("#text2")
    call(text).then(translation => {
        text2.value = translation;
    });
    }
);

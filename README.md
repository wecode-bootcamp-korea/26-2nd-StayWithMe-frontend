# ๐บ PROJECT_STAYWITHME | ์คํ์ด์๋๋ฏธ

์คํ์ด์๋๋ฏธ UI/UX ๋ฉ์ธ ์๋น์ค

1. ๊ฐ ์์์ ๋ํ ์ ๋ณด๋ฅผ ์ ๊ทผํ๊ธฐ ์ํ, Feed list ํ์์ ์ ๊ณตํฉ๋๋ค.
2. ์ ๋ณด์ ์ ๊ทผ์ฑ์์ํด, pagination์ ํตํด list๋ก ๋ถํ ํ์ฌ ๋ณด์ฌ์ค๋๋ค.
3. ๊ฐ ์์์ ๋ํ DetailPage ๋ด์์ ์์์ ๋ํ ์ ๋ณด ๋ฐ ์ด๋ฏธ์ง๋ฅผ ํ์ธํ  ์ ์์ผ๋ฉฐ Info-Extension์ Carousel-Slider๋ฅผ ํตํด ๋ณด์ฌ์ค๋๋ค.

- ์ฌ์ดํธ ๋งํฌ :

# ๐ TEAM_STAYWITHME | ์คํ์ด์๋๋ฏธ

- ์์ : 

## ๐ซ ํ์

- Front-end: ์ต๋ณํ, ์ง์ฐ๋น , ์ ์ ์ง
- Back-end: ๊ถ์๊ฒฝ, ์ด์ฐฌ๊ท

## ๊ฐ๋ฐ ๊ธฐ๊ฐ

- ๊ธฐ๊ฐ: 2021๋ 11์ 15์ผ ~ 2021๋ 11์ 26์ผ(12์ผ๊ฐ)

## ์ ์ฉ ๊ธฐ์ 

- Front-end: React(Funiction-Component)\_reactr-router-dom(V6), 
Styled-Components, JavaScript(ES6)
- Back-end: Django, Python, MySQL, jwt, bcrypt, AWS(EC2, RDS)
- ํ์ํด: Trello, Slack, Notion, Github, dbdiagram, postman

## ๊ตฌํ ๊ธฐ๋ฅ ๋ฐ ๊ฐ์ธ ์ญํ 

> **์ต๋ณํ**: InfoList Page

- ์๋ฒ์์ ๋ฐ์ ์จ ๋ฐ์ดํฐ ํ์(data-type)์ ๋ฐ๋ผ ๊ฐ ์์ ์ ๋ณด๊ฐ ๋ด๊ธด Feed๋ฅผ ์ผ์  ํฌ๊ธฐ๋งํผ mapping ํ์ฌ list ํ์์ผ๋ก ๋ณด์ฌ์ค๋๋ค.
- ์๋ฒ์ ๊ฐ๊ธฐ ๋ค๋ฅธ offset ๊ฐ์ path query์ ๋ฃ์์ผ๋ก์จ, ์ฌ์ฉ์๊ฐ page ๋ฒํผ์ ๋๋ฅผ ๋๋ง๋ค ๋ค๋ฅธ list๋ฅผ ๋ณผ ์ ์๋๋ก Pagination(ํ๋ฉด ๋ถํ ) ๊ธฐ๋ฅ์ ๊ตฌํํ์์ต๋๋ค.
- ์กฐ๊ฑด์ ๋ฐ๋ผ ํ์ฌ path ๊ฐ์ parsingํ์ฌ ๊ฐ๊ธฐ ๋ค๋ฅธ query ์กฐ๊ฑด๊ฐ์ด ๊ณ์ ๋ถ๊ฒ๋๋๋ก ํ๊ฑฐ๋ ์๋ฐ์ดํธ๋๋๋ก ํ๋ queryModule๋ฅผ ๋ฐ๋ก ์์ฑํ๊ณ  ์ด๋ฅผ ํ๋ก์ ํธ์์ ์ ์ฐ์ ์ผ๋ก ์ฐ์ผ ์ ์๋๋ก ํ์์ต๋๋ค.
- dayPicker ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์๊ฐ check_in / check_out ๋ ์ง๋ฅผ ์ ํํ์ฌ ํด๋น ๊ธฐ๊ฐ์ ๋ง๋ ์์ ๋ฆฌ์คํธ๋ค์ ๋ณผ ์ ์๋๋ก ๊ธฐ๋ฅ์ ๊ตฌํํ์์ต๋๋ค.
- ์ต์ ๊ธ์ก๊ณผ ์ต๋ ๊ธ์ก์ ํ๋ฒ์ ์ทจํฉํ์ฌ ์๋ฒ์ ํด๋น ๋ฐ์ดํฐ๋ฅผ ๋ณด๋ผ ์ ์๋๋ก Input type์ธ range ๊ธฐ๋ฅ์ ์ฌ์ฉํ์ฌ Slider ๊ธฐ๋ฅ์ ๊ตฌํํ์์ต๋๋ค.

> **์ง์ฐ๋น**: Login/Register, PaymentPage 

[Login/Register]
- ์นด์นด์ค Open API๋ฅผ ์ด์ฉํ ์์๋ก๊ทธ์ธ ๊ธฐ๋ฅ ๊ตฌํ
- ๋ก๊ทธ์ธ์ ๋ฐฑ์๋์์ ๋ฐํํ Token์ Local storage์ ์ ์ฅ

[PaymentPage]
- useSearchParams(), fetch()๋ฅผ ์ฌ์ฉํ์ฌ ์ด์  ํ์ด์ง์์ ์ ํํ ์ ๋ณด๋ค์ ๋ถ๋ฌ์ค๋ ๊ธฐ๋ฅ ๊ตฌํ
- ์ฒดํฌ๋ฐ์ค ์ ์ฒด์ ํ/์ ์ฒดํด์  ๊ตฌํ
> **์ ์ ์ง**: DetailPage

(๊ธฐ๋ฅ ์ค๋ช)



## ์๊ฐ ๋ฐ ํ๊ธฐ

> **์ต๋ณํ** : ์๋ฒ์์ ์กฐ๊ฑด์ ๋ง๋ ๋ฐ์ดํฐ ๊ฐ์ ๊ฐ์ ธ์ค๊ธฐ ์๊ณ  ํ๋ฉด์ ๋๋๋ง๋๋๋ก ํ์ฌ path ๊ฐ์ query ๋ถ๋ถ์ ์ง์์ ์ผ๋ก parsingํ๊ณ  ์๋ฐ์ดํธํ๊ธฐ ์ํ ๋ชจ๋์ ๋ก์ง์ ๋ง๋๋ ๊ฒ์ ์๋นํ ์ด๋ ค์ ๋ค. 
ํด๋น ๋ชจ๋์ ๋ด๋ถ ๋ก์ง์ ์ ๋ง์ ์กฐ๊ฑด๋ฌธ๊ณผ ์ ๊ท ํํ์์ ์ฌ์ฉํ์ฌ ์ต์ข์ ์ผ๋ก ์ฝ๋๊ฐ ๋ฌด์(What?)์ ํ๋ ์ง์ ๋ํด์ ๋ถ๋ชํํ๊ฒ ๋ ์ ์ด ์์ฌ์ ๋ค. ๋ค์ ํ๋ก์ ํธ ๋๋ useSearchParams์ ๊ฐ์ ๋ด๋ถ ๊ธฐ๋ฅ์ ์ฌ์ฉํ์ฌ query๊ฐ์ ์ข ๋ ํจ์จ์ ์ผ๋ก parsingํ  ์ ์๋ ๋ก์ง์ ๊ตฌํํด๋ณด๊ณ  ์ถ๋ค๋ ์๊ฐ์ด ๋ค์๋ค.

> **์ง์ฐ๋น**: (์๊ฐ ๋ฐ ํ๊ธฐ)
์๊ฐ์ ํ๊ณ๋ก ์ธํด ๋ง์ง๋ง์ ๊ฒฐ์ ํ์ด์ง์ data๋ฅผ ๋ฐฑ์๋๋ก postํ๋ ๋ก์ง์ ์์ฑํ์ง ๋ชปํ ๋ถ๋ถ์ด ์์ฝ๋ค.
๋ค์ ํ๋ก์ ํธ์์๋ ๊ฒฐ์ ํ์ด์ง์ ๋ง์ดํ์ด์ง๋ฅผ ๋งก์์ ํ์ด์ง ๊ฐ์ ๋ฐ์ดํฐ ์ ์ก๊ณผ ํ๋ก ํธ, ๋ฐฑ์๋ ์ฌ์ด์ ๋ฐ์ดํฐ ์ก์์ ์ ๋ํด ์ข ๋ ์์๋ณด๊ณ  ์ถ๋ค.

> **์ ์ ์ง** : (์๊ฐ ๋ฐ ํ๊ธฐ)

## ๋ ํผ๋ฐ์ค

- ์ด ํ๋ก์ ํธ๋ <u>[์คํ์ดํด๋ฆฌ์ค](https://www.stayfolio.com/)์ผ๋ก ๋ง๋ค์์ต๋๋ค.
- ์ค๋ฌด์์ค์ ํ๋ก์ ํธ์ด์ง๋ง ํ์ต์ฉ์ผ๋ก ๋ง๋ค์๊ธฐ ๋๋ฌธ์ ์ด ์ฝ๋๋ฅผ ํ์ฉํ์ฌ ์ด๋์ ์ทจํ๊ฑฐ๋ ๋ฌด๋จ ๋ฐฐํฌํ  ๊ฒฝ์ฐ ๋ฒ์ ์ผ๋ก ๋ฌธ์ ๋  ์ ์์ต๋๋ค.

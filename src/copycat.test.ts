import { copycat } from '.'
import { TRANSFORMATIONS, NUM_CHECKS } from './testutils'

test('determinism', () => {
  const input = 'some-value'

  const check = (name: string) => {
    const value1 = TRANSFORMATIONS[name](input)

    let i = -1

    while (++i < NUM_CHECKS) {
      expect(TRANSFORMATIONS[name](input)).toEqual(value1)
    }
  }

  Object.keys(copycat).forEach(check)
})

test('generated values', () => {
  const count = 10
  const results = {}

  const addResults = (name: string) => {
    const valueResults = []

    let i = -1

    while (++i < count) {
      valueResults.push(TRANSFORMATIONS[name](i))
    }

    results[name] = valueResults
  }

  Object.keys(TRANSFORMATIONS).forEach(addResults)

  expect(results).toMatchInlineSnapshot(`
    Object {
      "bool": Array [
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
      ],
      "char": Array [
        "v",
        "Z",
        "7",
        "I",
        "b",
        "Z",
        "E",
        "L",
        "B",
        "7",
      ],
      "city": Array [
        "Country Club",
        "Anderson",
        "Euclid",
        "Huntsville",
        "Missouri City",
        "Kettering",
        "Bentonville",
        "Bedford",
        "Visalia",
        "Caguas",
      ],
      "country": Array [
        "United Kingdom",
        "Niue",
        "Italy",
        "Slovakia (Slovak Republic)",
        "Austria",
        "Guinea",
        "Georgia",
        "Nicaragua",
        "Thailand",
        "Maldives",
      ],
      "dateString": Array [
        "1989-02-14T01:52:57.000Z",
        "2011-08-16T07:33:14.000Z",
        "2013-10-18T09:35:02.000Z",
        "1996-01-01T00:46:58.000Z",
        "2011-08-20T07:41:00.000Z",
        "1997-10-06T10:01:03.000Z",
        "1980-01-21T00:07:20.000Z",
        "2019-04-16T15:43:20.000Z",
        "2001-06-10T05:42:40.000Z",
        "1989-02-26T01:49:11.000Z",
      ],
      "email": Array [
        "Dewayne_Yost801@yahoo.com",
        "Faye.Luettgen942@yahoo.com",
        "Clinton.Haag275@hotmail.com",
        "Nia_Jacobs620@gmail.com",
        "Roy.Ondricka284@gmail.com",
        "Letitia.Veum972@yahoo.com",
        "Orlo.Cremin526@yahoo.com",
        "Tyrese.Ondricka607@gmail.com",
        "Ida_Gusikowski153@hotmail.com",
        "Shana_Reinger165@yahoo.com",
      ],
      "firstName": Array [
        "Madison",
        "Dino",
        "Dortha",
        "Ricardo",
        "Sherwood",
        "Forrest",
        "Garland",
        "Tyreek",
        "Cesar",
        "Abdiel",
      ],
      "float": Array [
        2766559028.1786575,
        247941005.65535155,
        1005905708.2690269,
        553741175.7373961,
        3711525276.117791,
        2406401323.174411,
        2714068071.307764,
        2493339650.2670717,
        818270688.3671304,
        4242705169.422357,
      ],
      "fullName": Array [
        "Dewayne Marks",
        "Faye Ortiz",
        "Clinton Schmidt",
        "Nia Schultz",
        "Roy Hermiston",
        "Letitia Wilderman",
        "Orlo Lang",
        "Tyrese Harvey",
        "Ida Ernser",
        "Shana Quitzon",
      ],
      "int": Array [
        3112761889,
        3637691191,
        1415325033,
        4124438976,
        142894351,
        39814017,
        1482841800,
        3515130879,
        3531449021,
        2601797209,
      ],
      "lastName": Array [
        "Cruickshank",
        "Pacocha",
        "Block",
        "Abernathy",
        "Kiehn",
        "Bins",
        "Nikolaus",
        "Predovic",
        "Carroll",
        "Wunsch",
      ],
      "oneOf": Array [
        "blue",
        "green",
        "green",
        "green",
        "blue",
        "green",
        "red",
        "red",
        "green",
        "red",
      ],
      "paragraph": Array [
        "Vasotaki niceamirae kiyu hy mutamura, me yuko mamuami menako kokin muviyuso na. Tako yo namu mevamuka shi hasomiyu tashi ra. Navi vahyrake mu somanichi havi mukai, va kai mucea rayura ranokin. Yo tamemoha mamemi miceakocea mi, hamora ceahyma misoni shina niva. Noa mehy ma hami nachikoyu ka yukincea yumerae, yoma metani vinoshi naniha chiceamuna nimoyuchi kokinki. Noke musoraevi kinmo kai nomumevi ni nomayu yo, munaniha kaceake moma vinokinki yura. Rae kincea ceamoyu vachiayo ceake, chiceani chirahychi chikohame yo yumemumi makechi meta.",
        "Takeyu vashiyo vani kairaeha nanoke kakinceamu vi. Vayokinshi kekochi kinmokai shira ramehy yuaki koke korae, naviyu viramoke yukami chi va kovinokai kinso kaiceasoma. Mi nokin kenavihy ra vayo yuhyno, hya mime mihyra kakoviso ta nashichika ceamokin kaika. Moceami ka taceame ke raekai rae, maki nahynona kisochishi nasoke sovi kakena muhy shi. Mia momi kohahyka ra koviyu raceamiva, hano sotachi vakira ni ranitahy mashira ke nike. Kiraeshi mushi vamo mo raeyokinhy, yusoni yuka mu yukin kai tacea nasochino nika.",
        "Kairae kiraemi rayomekin mekova yu raehavi ceamu, shira kotaki mokeshia nima muceamo kahykiso. Yorano vimo mu tashirahy ka masonami ma, raeyumena kaishita chimunichi hysoma hyke haniramu mema makotashi. Chimu ko makin vasoka rae yusocea, mi yochi rashiacea raevako komuvi mimoraeka raeyu manitashi. Hamu me kimayu tano ranoka, meamo rake kinhy kin keraviko. Kechikai yushi sohysovi yu cea meniso ki. Ceakin ceanihaso shihy nika ko hysomucea. Kenashimu moceahy rae meyo kakin ceanira mi tanihani, shi mokemi memuhykai kehykin raekoani raema.",
        "Manimu kai vikainako no rayume vi, kiyo mo rami na shi. Morakekai kekicea ha hayuyoke nimokaiyu meyoke yuhyrae. Shi nochi no mimo so hyvike. Vimoramo ka kachi kayo micea kamochira kinyomu shiraemuma. Miname yo yoma kinkiko sokairae momayu miayo raekorashi, kahychi mo moha raemivako shi yumenirae. Ke makishira ki motami kekin vaceamerae, mesomi shika yu vakimo kinko kano so kacea.",
        "Noshirae ke moceayu viko kohahy kiraemu mu, kin takinsokin taso ko nayucea rameyu chi. Kaisoceashi memi nashiyoke ki nitakemo keso. Ra ceakihyrae ramicea koshi kaivayu mo vike kechinokin, noni kaiyoma kamoha shisohy ta kiraketa kairayo. Ceahy meraehakin ceamokayo tame raemisoyu raeyumo keki va. Taviva kai na chi chita. Nacea no yuhynacea rani ceayuke soyu kinvaceaki shi, raevi hyko nakemokai cea yuvimuki.",
        "Shi kaiyuno kikenira ha kainokaika yome nishi. Vamerae ra yuhykaike kemota ke raeni, muva sotamu nikonami no kemi. Chicea cea me yoshi yovamu.",
        "Raeyoki soshiceaso ki nomi ceake kin takin ki, rae chikakicea hykin hyhachiha viyuke hy kaicea ke. Muvi mekaitami kehynohy ke kaso, vaceano ni cea yo cea. Yo make kayochimu kaiha ninotamu ha, nasokaiyu shi nome sokinhyso kavimo hyma.",
        "Haki ta kenihy ka maceayocea kanohy menachi mamikeki. Ra kokikai chivachiva ta ceanohachi vakehy hachi, yuvavi takinmayu mehyhamu ramohykai niraekinchi. Shinacea kinmachikai kisoa hyvayomu kina hayoni. Meyumo ko hamera musokena meni hasovano mi, kechiko yume sorachi ha chivaso kechi ta. Vitavia yo mekokin ta rakeyu mevakin vi, hayumiko mako ceaviha kinmichi memu ma muma. Hamirae vi shimeshi sorae rakomachi kaihyme, ta mokai keyocea yo kinmeni komiyuyo. Mokaita ko noyu hyrae ha, kohymi ma ceanonami kin kiyoame ra kin.",
        "Shike mi mukoka kimu mochi kakehy, vaceamota vavi kai yukinshi yu mokayo keayo. Mokinmukin rahycea nome hamovami shikai keka mi kishikamu. Hykinvamu muchi ka vahynoma moni. Ko miashi ceashiko nikeracea nomaso kikai. Noceame ka kekai rae hy cea, kaimurame hynihavi yohy hy rano kamiyoke vaso.",
        "Nia kamoha shi shinovino mu kinyuna kinomamo muahy, vitake va yomunirae mukaima mi. Ke vimashiha kemohyme kaceamu soamu, kashiyochi raemomume ni vishi kokaso tacea yu miahy. Nameva ra vashi kinsokai mahy memayoha, kin mu vaceamikai hacea ceasohy. Ni niso ceani shikako muke vinome, tayomiyu me chihy nona no munamiyo shimu.",
      ],
      "postalAddress": Array [
        "932 Krista Union, Santa Fe 8316, Maldives",
        "655 Maudie Stravenue, Caldwell 5338, Paraguay",
        "750 Nienow Hill, Stamford 5115, Haiti",
        "809 Florencio View, West Covina 5836, Bhutan",
        "237 Earnestine Inlet, Barnstable Town 7943, Israel",
        "355 Conn Run, La Mirada 3381, Israel",
        "821 Margaret Skyway, Conway 8574, Bahrain",
        "96 Leuschke Prairie, Racine 7319, Barbados",
        "71 Hahn Club, South Gate 5660, Cyprus",
        "305 Roob Trail, Costa Mesa 5708, Macao",
      ],
      "sentence": Array [
        "Vivano mera nanichiha ni moshiyu sochi kinrame kinma.",
        "Nake ke masonako vikeki kinva ma raeshi munoniko, ceahyke ko soyukaiha hahy chi.",
        "Kekaihy sokakeki mushi rachiso ke kaia.",
        "Kitavira memu sokinkaiva kakerae mekai chimomuso yokiva.",
        "Morae ta yoha ceakinhano rachi ni sovime ketakoha, sorae muso kakocea vishihame niceayu.",
        "Hynorae yo kincea kaichihymu no minonaso, ceashiva kaike hykani ka rae.",
        "Vi kishikai na shihyso kovi hyshiso.",
        "Makirae ni nokai mako chi.",
        "Mokira va hanora hahya muchiame no raekai ra.",
        "Mokin ni meyuyo kayo yu tameraena, mekishi mekai kai mohamuso hynoyuchi takinkai.",
      ],
      "streetAddress": Array [
        "674 Jamel Tunnel",
        "150 Melba Divide",
        "235 Ullrich Mews",
        "740 Alvah Valley",
        "742 Jacky Spring",
        "999 Felton Island",
        "98 Chadd Manor",
        "396 Sage Walk",
        "473 Rachelle Wells",
        "757 Pfeffer Greens",
      ],
      "streetName": Array [
        "Theodore Ridge",
        "Mosciski Springs",
        "MacGyver Heights",
        "O'Kon Brooks",
        "Cummings Road",
        "Rowland Prairie",
        "Leland Ridges",
        "Smith Turnpike",
        "Towne Tunnel",
        "Kirk Freeway",
      ],
      "username": Array [
        "Dewayne_Yost801",
        "Faye.Luettgen942",
        "Clinton.Haag275",
        "Nia_Jacobs620",
        "Roy.Ondricka284",
        "Letitia.Veum972",
        "Orlo.Cremin526",
        "Tyrese.Ondricka607",
        "Ida_Gusikowski153",
        "Shana_Reinger165",
      ],
      "uuid": Array [
        "0dfe6668-13e0-5b72-ab8f-fa435c067559",
        "f4e69f87-51e7-5f66-b9a6-956391a3840f",
        "9d16c41f-18cf-5366-a9e1-593636e3c23f",
        "c6bc7322-a022-530b-bb96-f1e6a22820e3",
        "bc98f5b5-e20f-5866-bcd6-68b8d202e396",
        "c9dcb68e-0c24-52a5-a9ed-93b6b5f502ca",
        "ee906ee0-36bd-5463-9326-ea7e669ba450",
        "ed6b1c8b-2ecb-56ca-b73a-d27d7ed669ea",
        "e37972bd-0015-5ccd-95ab-c2162bc760ea",
        "f1848f89-408d-57e5-9406-bb5bd3b5afcb",
      ],
      "word": Array [
        "Mokai",
        "Yomi",
        "Nikeni",
        "Hykinraema",
        "Moviceayo",
        "Taceakin",
        "Kaihyrae",
        "Ravi",
        "Yoayoshi",
        "Kimo",
      ],
      "words": Array [
        "Hyka socea mayokai",
        "Shihyke kanome kiraekame",
        "Hyna meyoke yoninashi",
        "Raenikaiva yunasomu",
        "Hymura shisome kima",
        "Ceanitani ninano kiyonita",
        "Kinraceami kaimuke",
        "Nokiha somea rame",
        "Mimeyuso yumiyo raekaimushi",
        "Yuma mohayohy rakina",
      ],
    }
  `)
})
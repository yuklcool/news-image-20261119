[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/yuklcool/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/yuklcool/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

# THE WORLD TODAY — Thursday 19 November 2026 (v3)

One image summing up the world news of Thursday 19 November 2026, drawn as
a newspaper front page with pictures: 47 stories from six continents in one
1024&times;1024 square. The program (`main.ts`) copies the pre-rendered
`entry.png` into the output directory; the page it was rendered from is kept
in `page/index.html` and its illustrations in `assets/` so the build is
documented.

Version 1 (6 stories, text only) scored a 96.57% dev win rate and ranked
1784th. Version 2 (47 stories, still text only) scored 96.72% and ranked
around 2064th — density alone barely moved it. Version 3 keeps the 47
stories and adds what both versions lacked: real pictures. The Shenzhen
summit leads with a full illustration, and GTA VI, Voyager 1 and the Van
Gogh sale each get a picture beside their headline, so every front-page
story is clear from its picture as well as its words.

## The stories

**Lead:** Trump, Xi and Putin meet in Shenzhen — the first-ever trilateral
summit of the three nuclear powers, on the sidelines of APEC. Xi hugged
Trump on the tarmac as he arrived. Picture: the Shenzhen skyline at dusk
with the three flags.

**In pictures:** GTA VI launches worldwide (13 years after GTA V, 99 on
Metacritic — neon Vice City street); Voyager 1, one light-day away (NASA
confirms the 1977 probe is the first human-made object a light-day from
Earth — the probe in deep space); Van Gogh sells for $190.4M
("Blossoming Chestnut Trees" sets an artist record — the tree painted in
Van Gogh's style).

**Americas (8):** US–Venezuela defence pact; Hegseth lands in Colombia;
Jeffries nominated for Speaker; 236 protesters freed; temple plot
indictment; 27 years for Trump plot; Haiti–El Salvador deal; Canada
recalibrates China ties.

**Europe (7):** EU proposes a €45bn Ukraine loan; Ukraine hits two
refineries; Crimean Bridge hit again; Putin slams sanctions; Kyiv urges Xi
and Trump; Mélenchon "could win"; France jails three ISIS women.

**Middle East &amp; Africa (7):** Israeli tanks cross the Gaza line; Saudi
alerts over; US warns citizens in the Gulf; IAEA backs the US–Saudi atom
deal; drugs seized in Libya; Sudan drone toll; Gulf states repel drones.

**Asia-Pacific (8):** India–Canada defence pact; India–Japan 2+2 talks;
Bangladesh sends in troops; Bangladesh goes nuclear; Cyclone Akvan nears
India; Kashmir rebel leader killed; World Court rules on Rohingya case; Xi
meets Putin first.

**Business &amp; Tech (4):** Anthropic debuts on Nasdaq (record $81bn IPO,
first trade on 19 November); copper plunges 5%; "spy" held over Palantir;
senators warn on AI threats.

**Science &amp; Culture (4):** Red crabs march to sea; wine harvest hit by
climate; Harry sees a "big separation"; Islam to top faith by 2035.

**In brief (5):** Honduras attacks; Kumamoto quake; Earthshot Prize;
Trump to call Takaichi; 1 in 4 children in conflict zones.

All 47 stories happened or were first reported on 19 November 2026. Every
fact on the page was checked against news reporting from that day; nothing
was invented. Two stories reported on 18 November (the EU loan proposal, the
Jeffries nomination) are included as the day's front-page news, as the
morning papers of 19 November carried them; the Earthshot Prize ceremony
was 17 November, reported on 19 November.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# out/entry.png is a byte-identical copy of entry.png
```

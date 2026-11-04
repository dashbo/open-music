# Open Music: curation draft

Picks for the catalog, by category. **Draft, 2026-11-03.** Nothing here is in `catalog.json` yet.

## Status (2026-11-04)

Added to `catalog.json` (9 entries, catalog now 21):

- **Quartets (4, OS):** Haydn Op.64 No.5 "The Lark", Haydn Op.20 No.4, Mozart K.465 "Dissonance", Saint-Georges Op.1 No.1. These import with four properly named parts (Violin 1, Violin 2, Viola, Violoncello).
- **Barbershop (5, CPDL):** Sweet Adeline, Peg o' My Heart, When You Wore a Tulip, Heidelberg Stein Song (all TTBB, labelled Tenor/Lead/Baritone/Bass), and Down by the Old Mill Stream (three-part). Under the CPDL License, not CC0; see `ATTRIBUTION.md`. Not yet reviewed by a barbershop singer.

**Waiting on an app change:** the other 41 of the 47 quartets checked import with 5-13 parts named "Soprano", "Alto", "Violin 1 2" and so on, because the app splits any instrument part that has more than one voice (double stops, divisi) into separate parts. Only the 6 whose violins have a single voice come out clean. Two of those six are single movements of larger works (Mozart K.464 and Mayer Op.14) and were not added. Add the rest once the app keeps instrument parts whole.

Sources and what they guarantee:
- **OS** = OpenScore Lieder / String Quartets (github.com/OpenScore), CC0, transcribed from IMSLP sources. Official `.mxl` files exist for every score; no conversion needed.
- **PDMX** = Zenodo record 15571083. License is **uploader-declared** (public domain mark or CC0), not verified. Only pieces whose *composition* is old public domain were picked, from the subset with no license conflict. Re-check each before publishing.
- **CPDL** = cpdl.org. Most files are under the CPDL License (free to copy and distribute with notices kept; not CC0). CPDL blocks automated fetching, so files must be downloaded by hand.
- **⚠ app** = the app's repeat planner ran away on this multi-movement file (hit the 4,000-measure cap). Fixed by rehearsal-room PR #54, merged and deployed as sha-313dcb2 on 2026-11-04 (checked against all 22 affected files), so these now play correctly and are safe to add.

Every OS and PDMX pick below parses in the app with no errors (checked 2026-11-03).

## German Lieder

- Beethoven: Mailied — OS `Lieder/scores/Beethoven,_Ludwig_van/8_Lieder,_Op.52/4_Mailied/lc6491377.mxl`
- Brahms: Die Mainacht — OS `Lieder/scores/Brahms,_Johannes/4_Songs,_Op.43/2_Die_Mainacht/lc5153947.mxl`
- Brahms: Von ewiger Liebe — OS `Lieder/scores/Brahms,_Johannes/4_Songs,_Op.43/1_Von_ewiger_Liebe/lc5153813.mxl`
- Brahms: Wiegenlied — OS `Lieder/scores/Brahms,_Johannes/5_Lieder,_Op.49/4_Wiegenlied/lc5701612.mxl`
- Mahler: Rheinlegendchen — OS `Lieder/scores/Mahler,_Gustav/Des_Knaben_Wunderhorn/7_Rheinlegendchen/lc29746856.mxl`
- Mendelssohn: Altdeutsches Frühlingslied, MWV K 127 — OS `Lieder/scores/Mendelssohn,_Felix/6_Gesänge,_Op.86/6_Altdeutsches_Frühlingslied,_MWV_K_127/lc6997609.mxl`
- Schubert: An die Musik, D.547 — OS `Lieder/scores/Schubert,_Franz/_/An_die_Musik,_D.547/lc6180725.mxl`
- Schubert: Der Erlkönig, D.328 — OS `Lieder/scores/Schubert,_Franz/_/Der_Erlkönig,_D.328/lc29062370.mxl`
- Schubert: Der Leiermann (Spätere Fassung) — OS `Lieder/scores/Schubert,_Franz/Winterreise,_D.911/24_Der_Leiermann_(Spätere_Fassung)/lc5014023.mxl`
- Schubert: Der Lindenbaum — OS `Lieder/scores/Schubert,_Franz/Winterreise,_D.911/05_Der_Lindenbaum/lc5016466.mxl`
- Schubert: Die Forelle, Op.32, D550d — OS `Lieder/scores/Schubert,_Franz/_/Die_Forelle,_Op.32,_D550d/lc6900961.mxl`
- Schubert: Du bist die Ruh — OS `Lieder/scores/Schubert,_Franz/Op.59/3_Du_bist_die_Ruh/lc4919879.mxl`
- Schubert: Ellens Gesang III, D.839 (Ave Maria) — OS `Lieder/scores/Schubert,_Franz/Op.52/6_Ellens_Gesang_III,_D.839_(Ave_Maria)/lc6389103.mxl`
- Schubert: Gretchen am Spinnrade, D.118 — OS `Lieder/scores/Schubert,_Franz/_/Gretchen_am_Spinnrade,_D.118/lc7111114.mxl`
- Schubert: Gute Nacht — OS `Lieder/scores/Schubert,_Franz/Winterreise,_D.911/01_Gute_Nacht/lc5015378.mxl`
- Schubert: Heidenröslein, D.257 — OS `Lieder/scores/Schubert,_Franz/Op.3/3_Heidenröslein,_D.257/lc30321236.mxl`
- Schubert: Ständchen — OS `Lieder/scores/Schubert,_Franz/Schwanengesang,_D.957/04_Ständchen/lc5004835.mxl`
- Schubert: Wohin — OS `Lieder/scores/Schubert,_Franz/Die_schöne_Müllerin,_D.795/02_Wohin/lc4982535.mxl`
- Schumann: Der Nussbaum — OS `Lieder/scores/Schumann,_Robert/Myrthen,_Op.25/03_Der_Nussbaum/lc6891758.mxl`
- Schumann: Die Lotosblume — OS `Lieder/scores/Schumann,_Robert/Myrthen,_Op.25/07_Die_Lotosblume/lc6909797.mxl`
- Schumann: Ich grolle nicht — OS `Lieder/scores/Schumann,_Robert/Dichterliebe,_Op.48/07_Ich_grolle_nicht/lc4978382.mxl`
- Schumann: Im wunderschönen Monat Mai — OS `Lieder/scores/Schumann,_Robert/Dichterliebe,_Op.48/01_Im_wunderschönen_Monat_Mai/lc4976777.mxl`
- Schumann: Mondnacht — OS `Lieder/scores/Schumann,_Robert/Liederkreis,_Op.39/05_Mondnacht/lc4987640.mxl`
- Schumann: Seit ich ihn gesehen — OS `Lieder/scores/Schumann,_Robert/Frauenliebe_und_Leben,_Op.42/1_Seit_ich_ihn_gesehen/lc4978468.mxl`
- Schumann: Widmung — OS `Lieder/scores/Schumann,_Robert/Myrthen,_Op.25/01_Widmung/lc6885211.mxl`
- Strauss: Cäcilie — OS `Lieder/scores/Strauss,_Richard/4_Lieder,_Op.27/2_Cäcilie/lc6199572.mxl`
- Strauss: Morgen! — OS `Lieder/scores/Strauss,_Richard/4_Lieder,_Op.27/4_Morgen!/lc6199578.mxl`
- Wolf: Verborgenheit — OS `Lieder/scores/Wolf,_Hugo/Mörike-Lieder/12_Verborgenheit/lc29477528.mxl`

## French and English song

- Bizet: Sérénade — OS `Lieder/scores/Bizet,_Georges/20_Mélodies,_Op.21/10_Sérénade/lc6898141.mxl`
- Chaminade: L’été — OS `Lieder/scores/Chaminade,_Cécile/_/L’été/lc5987667.mxl`
- Chaminade: Villanelle — OS `Lieder/scores/Chaminade,_Cécile/_/Villanelle/lc30190433.mxl`
- Debussy: Il pleure dans mon coeur — OS `Lieder/scores/Debussy,_Claude/Ariettes_Oubliées/2_Il_pleure_dans_mon_coeur/lc5060918.mxl`
- Debussy: Les cloches — OS `Lieder/scores/Debussy,_Claude/2_Romances/2_Les_cloches/lc7086632.mxl`
- Debussy: Mandoline — OS `Lieder/scores/Debussy,_Claude/_/Mandoline/lc29748596.mxl`
- Elgar: Like to the Damask Rose — OS `Lieder/scores/Elgar,_Edward/7_Lieder/1_Like_to_the_Damask_Rose/lc6236149.mxl`
- Fauré: Après un rêve — OS `Lieder/scores/Fauré,_Gabriel/3_Songs,_Op.7/1_Après_un_rêve/lc6810863.mxl`
- Fauré: Les roses d’Ispahan — OS `Lieder/scores/Fauré,_Gabriel/Op.39/4_Les_roses_d’Ispahan/lc29989154.mxl`
- Fauré: Lydia — OS `Lieder/scores/Fauré,_Gabriel/Op.4/2_Lydia/lc30299786.mxl`
- Haydn: The Mermaid’s Song, Hob.XXVIa25 — OS `Lieder/scores/Haydn,_Joseph/10_Canzonets/07_The_Mermaid’s_Song,_Hob.XXVIa25/lc6472842.mxl`
- Quilter: Cherry Ripe — OS `Lieder/scores/Quilter,_Roger/To_Julia,_Op.8/8_Cherry_Ripe/lc30908660.mxl`
- Quilter: O Mistress Mine — OS `Lieder/scores/Quilter,_Roger/3_Shakespeare_Songs,_Op.6/2_O_Mistress_Mine/lc29746199.mxl`
- Warlock: Lullaby — OS `Lieder/scores/Warlock,_Peter/Songs/13_Lullaby/lc6202319.mxl`

## String quartets: Classical

- Beethoven: Grosse Fuge in B-flat major, Op.133 — OS `StringQuartets/scores/Beethoven,_Ludwig_van/Grosse_Fuge_in_B-flat_major,_Op.133/sq10502527.mxl`
- Beethoven: String Quartet No.1, Op.18 No.1 — OS `StringQuartets/scores/Beethoven,_Ludwig_van/String_Quartet_No.1,_Op.18_No.1/sq8071278.mxl` ⚠ app
- Beethoven: String Quartet No.13 in B♭ major, Op.130 — OS `StringQuartets/scores/Beethoven,_Ludwig_van/String_Quartet_No.13_in_B♭_major,_Op.130/sq11539384.mxl` ⚠ app
- Beethoven: String Quartet No.14 in C♯ minor, Op.131 — OS `StringQuartets/scores/Beethoven,_Ludwig_van/String_Quartet_No.14_in_C♯_minor,_Op.131/sq20090908.mxl`
- Beethoven: String Quartet No.16 in F major, Op.135 — OS `StringQuartets/scores/Beethoven,_Ludwig_van/String_Quartet_No.16_in_F_major,_Op.135/sq12397213.mxl`
- Beethoven: String Quartet No.9, Op.59 No.3 — OS `StringQuartets/scores/Beethoven,_Ludwig_van/String_Quartet_No.9,_Op.59_No.3/sq7872392.mxl` ⚠ app
- Haydn: String Quartet in C major, Hob.III77, Op.76 No.3 — OS `StringQuartets/scores/Haydn,_Joseph/String_Quartet_in_C_major,_Hob.III77,_Op.76_No.3/sq20428156.mxl` ⚠ app
- Haydn: String Quartet in D major, Hob.III34, Op.20 No.4 — OS `StringQuartets/scores/Haydn,_Joseph/String_Quartet_in_D_major,_Hob.III34,_Op.20_No.4/sq8509238.mxl` ⚠ app
- Haydn: String Quartet in D major, Hob.III63, Op.64 No.5 — OS `StringQuartets/scores/Haydn,_Joseph/String_Quartet_in_D_major,_Hob.III63,_Op.64_No.5/sq7284122.mxl` ⚠ app
- Haydn: String Quartet in D minor, Hob.III76, Op.76 No.2 — OS `StringQuartets/scores/Haydn,_Joseph/String_Quartet_in_D_minor,_Hob.III76,_Op.76_No.2/sq12772795.mxl` ⚠ app
- Haydn: String Quartet in G major, Hob.III75, Op.76 No.1 — OS `StringQuartets/scores/Haydn,_Joseph/String_Quartet_in_G_major,_Hob.III75,_Op.76_No.1/sq15049456.mxl` ⚠ app
- Haydn: String Quartet in G minor, Hob.III74, Op.74 No.3 (The Horseman) — OS `StringQuartets/scores/Haydn,_Joseph/String_Quartet_in_G_minor,_Hob.III74,_Op.74_No.3_(The_Horseman)/sq10313029.mxl` ⚠ app
- Mozart: String Quartet No.14 in G major, K.387 (Op. 10, No. 1) — OS `StringQuartets/scores/Mozart,_Wolfgang_Amadeus/String_Quartet_No.14_in_G_major,_K.387_(Op._10,_No._1)/sq7103818.mxl` ⚠ app
- Mozart: String Quartet No.15 in D minor, K.421417b (Op. 10, No. 2) — OS `StringQuartets/scores/Mozart,_Wolfgang_Amadeus/String_Quartet_No.15_in_D_minor,_K.421417b_(Op._10,_No._2)/sq7294793.mxl` ⚠ app
- Mozart: String Quartet No.17 in B-flat major, K.458 (Op. 10, No. 3) — OS `StringQuartets/scores/Mozart,_Wolfgang_Amadeus/String_Quartet_No.17_in_B-flat_major,_K.458_(Op._10,_No._3)/sq7353137.mxl` ⚠ app
- Mozart: String Quartet No.18 in A major, K.464 (Op. 10, No. 5) — OS `StringQuartets/scores/Mozart,_Wolfgang_Amadeus/String_Quartet_No.18_in_A_major,_K.464_(Op._10,_No._5)/sq7070781.mxl`
- Mozart: String Quartet No.19 in C major, K.465 (Op. 10, No. 6) — OS `StringQuartets/scores/Mozart,_Wolfgang_Amadeus/String_Quartet_No.19_in_C_major,_K.465_(Op._10,_No._6)/sq7471661.mxl` ⚠ app
- Mozart: String Quartet No.21 in D major, K.575 — OS `StringQuartets/scores/Mozart,_Wolfgang_Amadeus/String_Quartet_No.21_in_D_major,_K.575/sq16138966.mxl` ⚠ app

## String quartets: Romantic

- Arriaga: String Quartet No.1 in D minor — OS `StringQuartets/scores/Arriaga,_Juan_Crisóstomo_de/String_Quartet_No.1_in_D_minor/sq13744399.mxl`
- Borodin: String Quartet No.1 — OS `StringQuartets/scores/Borodin,_Alexander/String_Quartet_No.1/sq8811375.mxl`
- Borodin: String Quartet No.2 — OS `StringQuartets/scores/Borodin,_Alexander/String_Quartet_No.2/sq10675759.mxl`
- Brahms: String Quartet No.1, Op.51 No.1 — OS `StringQuartets/scores/Brahms,_Johannes/String_Quartet_No.1,_Op.51_No.1/sq7108150.mxl`
- Brahms: String Quartet No.3, Op.67 — OS `StringQuartets/scores/Brahms,_Johannes/String_Quartet_No.3,_Op.67/sq8928855.mxl`
- Dvořák: String Quartet No.12, Op.96 (“American”) — OS `StringQuartets/scores/Dvořák,_Antonín/String_Quartet_No.12,_Op.96_(“American”)/sq8885439.mxl`
- Dvořák: String Quartet No.14, Op.105 — OS `StringQuartets/scores/Dvořák,_Antonín/String_Quartet_No.14,_Op.105/sq23996920.mxl`
- Grieg: String Quartet No.1, Op.27 — OS `StringQuartets/scores/Grieg,_Edvard/String_Quartet_No.1,_Op.27/sq9631717.mxl` ⚠ app
- Mendelssohn: String Quartet No.1, Op.12 — OS `StringQuartets/scores/Mendelssohn,_Felix/String_Quartet_No.1,_Op.12/sq7224846.mxl`
- Mendelssohn: String Quartet No.2, Op.13 — OS `StringQuartets/scores/Mendelssohn,_Felix/String_Quartet_No.2,_Op.13/sq8885571.mxl`
- Mendelssohn: String Quartet No.3, Op.44 No.1 — OS `StringQuartets/scores/Mendelssohn,_Felix/String_Quartet_No.3,_Op.44_No.1/sq25717423.mxl` ⚠ app
- Schubert: String Quartet in A minor, D.804, No.13 — OS `StringQuartets/scores/Schubert,_Franz/String_Quartet_in_A_minor,_D.804,_No.13/sq29218964.mxl` ⚠ app
- Schubert: String Quartet in D minor, D.810, No.14 (“Death and the Maiden”) — OS `StringQuartets/scores/Schubert,_Franz/String_Quartet_in_D_minor,_D.810,_No.14_(“Death_and_the_Maiden”)/sq7397765.mxl` ⚠ app
- Schubert: String Quartet in G major, D.887, No.15 — OS `StringQuartets/scores/Schubert,_Franz/String_Quartet_in_G_major,_D.887,_No.15/sq17329942.mxl` ⚠ app
- Schumann: String Quartet No.1, Op.41 No.1 — OS `StringQuartets/scores/Schumann,_Robert/String_Quartet_No.1,_Op.41_No.1/sq9010547.mxl` ⚠ app
- Smetana: String Quartet No.1 — OS `StringQuartets/scores/Smetana,_Bedřich/String_Quartet_No.1/sq7483523.mxl`
- Tchaikovsky: String Quartet No.1, Op.11 — OS `StringQuartets/scores/Tchaikovsky,_Pyotr_Ilyich/String_Quartet_No.1,_Op.11/sq11738245.mxl`
- Wolf: Italian Serenade — OS `StringQuartets/scores/Wolf,_Hugo/Italian_Serenade/sq8812200.mxl`

## String quartets: 20th century

- Bartók: String Quartet No.2, Op.17 (Sz.67) — OS `StringQuartets/scores/Bartók,_Béla/String_Quartet_No.2,_Op.17_(Sz.67)/sq8741475.mxl`
- Debussy: String Quartet in G minor, Op.10 — OS `StringQuartets/scores/Debussy,_Claude/String_Quartet_in_G_minor,_Op.10/sq8661306.mxl`
- Elgar: String Quartet, Op.83 — OS `StringQuartets/scores/Elgar,_Edward/String_Quartet,_Op.83/sq7362818.mxl`
- Fauré: String Quartet, Op.121 — OS `StringQuartets/scores/Fauré,_Gabriel/String_Quartet,_Op.121/sq7358708.mxl`
- Janáček: String Quartet No.1 “Kreutzer Sonata” — OS `StringQuartets/scores/Janáček,_Leoš/String_Quartet_No.1_“Kreutzer_Sonata”/sq7158117.mxl`
- Ravel: String Quartet in F major — OS `StringQuartets/scores/Ravel,_Maurice/String_Quartet_in_F_major/sq8482283.mxl`

## Women and overlooked composers

- Beach: String Quartet, Op. 89 — OS `StringQuartets/scores/Beach,_Amy/String_Quartet,_Op._89/sq14387632.mxl`
- Boulanger: Elle est gravement gaie — OS `Lieder/scores/Boulanger,_Lili/Clairières_dans_le_ciel/02_Elle_est_gravement_gaie/lc5854283.mxl`
- Hensel: Italien — OS `Lieder/scores/Hensel,_Fanny/3_Songs/2_Italien/lc6022185.mxl`
- Hensel: Nachtwanderer — OS `Lieder/scores/Hensel,_Fanny/6_Lieder,_Op.7/1_Nachtwanderer/lc5987757.mxl`
- Hensel: String Quartet in E-flat major, Op. 277 — OS `StringQuartets/scores/Hensel,_Fanny_(Mendelssohn)/String_Quartet_in_E-flat_major,_Op._277/sq7577795.mxl`
- Mayer: String Quartet in G minor, Op.14 — OS `StringQuartets/scores/Mayer,_Emilie/String_Quartet_in_G_minor,_Op.14/sq7070319.mxl`
- Saint-Georges: String Quartet in C major, Op.1 No.1 — OS `StringQuartets/scores/Saint-Georges,_Joseph_Bologne/String_Quartet_in_C_major,_Op.1_No.1/sq8437358.mxl` ⚠ app
- Schumann: Liebst du um Schönheit — OS `Lieder/scores/Schumann,_Clara/Lieder,_Op.12/04_Liebst_du_um_Schönheit/lc5000397.mxl`
- Schumann: Lorelei — OS `Lieder/scores/Schumann,_Clara/_/Lorelei/lc4919673.mxl`
- Smyth: String Quartet in E minor — OS `StringQuartets/scores/Smyth,_Ethel/String_Quartet_in_E_minor/sq7555331.mxl` ⚠ app

## Hymns

- Abide with Me — PDMX `mxl/10/56/QmSzMTdDidpQfBsdi4WsKBwL2S8mxdaMgN9ZwBD3Heg1a5.mxl` · 4.9★ (31 ratings), 843 views, 2 tracks, lyrics · uploader says publicdomain
- Holy, Holy, Holy (Nicaea) — PDMX `mxl/12/54/QmUyUn5hQLeVtVqKayJmuDRDE6SQyDGHMDw1RMYt3P6uLx.mxl` · unrated, 588 views, 3 tracks, lyrics · uploader says publicdomain
- Be Thou My Vision — PDMX `mxl/12/5/QmU68hFrU7rjUYhtDbjLT9FWbcr1BY2FU5s2ELPGMvxQ2B.mxl` · unrated, 382 views, 5 tracks · uploader says publicdomain
- A Mighty Fortress — PDMX `mxl/6/32/QmNMtJ9FjvvGEw1M9biWQSjrfa9WvQyas9j5HLSYmHJn8j.mxl` · unrated, 39 views, 5 tracks, lyrics · uploader says publicdomain
- Come, Thou Fount — PDMX `mxl/1/43/QmbSF9DVCEwcwe2AS2Sm2WfTBzbMiKjEXpyvCWX6YQT8ZT.mxl` · unrated, 46 views, 3 tracks, lyrics · uploader says publicdomain
- Nearer, My God, to Thee — PDMX `mxl/8/8/QmQ9epma2TQZY8SznSFWKadqcdwZb1yamGEifcroPAUQ6M.mxl` · unrated, 12 views, 4 tracks, lyrics · uploader says publicdomain

## Christmas

- O Holy Night — PDMX `mxl/3/46/QmdugSTyTmTXBZVyeSSRmixBFkQ1KNiYty5BYkb7XZARxZ.mxl` · 4.8★ (274 ratings), 19985 views, 2 tracks, lyrics · uploader says publicdomain
- O Come, All Ye Faithful (Adeste fideles) — PDMX `mxl/8/40/QmQrtRcbL6f51sFooPfiQ2YrS9pyL5gVybgi1VQ7MRw5NY.mxl` · unrated, 1052 views, 6 tracks, lyrics · uploader says publicdomain
- Hark! The Herald Angels Sing — PDMX `mxl/5/5/Qmf6pFbWXVTMiDhHZpXpxHaYJTM4rTtHKnaD6gBp7xH4oQ.mxl` · unrated, 44 views, 5 tracks, lyrics · uploader says publicdomain
- God Rest Ye Merry, Gentlemen — PDMX `mxl/1/50/QmbwXY9ezK66ViVoGNV5Y82jwqQi2rzmqb81w7pNC9hMae.mxl` · unrated, 291 views, 4 tracks, lyrics · uploader says publicdomain
- Coventry Carol — PDMX `mxl/2/33/QmcnAxyypEgWxe7TRWihYrJjfPLhVwTSMUkMk8fxRry5JH.mxl` · 4.7★ (8 ratings), 1363 views, 3 tracks · uploader says publicdomain
- Carol of the Bells (SAT) — PDMX `mxl/17/10/QmZA8HjH7HroRoy4NJFRAx8eGqUZyY8n4E9p98tjTQeed9.mxl` · 4.8★ (9 ratings), 2216 views, 3 tracks, lyrics · uploader says publicdomain

## Folk & spirituals

- Go Down, Moses (Burleigh) — PDMX `mxl/9/56/QmRzrABAoVQpd6YMug8fYMtsEJB7gKq7nJHgtxyD9qsXB2.mxl` · 4.5★ (9 ratings), 819 views, 2 tracks, lyrics · uploader says publicdomain
- Londonderry Air / Danny Boy — PDMX `mxl/3/47/QmdUmLjou2wJ7Nn5PVT14TmhDrKqLbgVH1jiN9ZCJAsGVx.mxl` · 4.6★ (14 ratings), 3584 views, 3 tracks · uploader says publicdomain
- Loch Lomond — PDMX `mxl/8/35/QmQo2rJ2mN6eW3KQ3nmPyNCdYofBGc1odytpyeWTefpRBb.mxl` · unrated, 1962 views, 3 tracks · uploader says publicdomain
- Auld Lang Syne — PDMX `mxl/11/21/QmTgrTW7qVmPtrQRLNzCWsUPapirMav2Nfg4GTBGY6j4cn.mxl` · 4.8★ (52 ratings), 1383 views, 1 tracks, lyrics · uploader says publicdomain
- Simple Gifts — PDMX `mxl/5/18/QmfEXWMzsuRJRDQe9PvbpFWdN14uzuyxADi1tUkCatTWAC.mxl` · 4.7★ (32 ratings), 11067 views, 2 tracks · uploader says publicdomain

## Choral masterworks

- Lacrimosa (Mozart Requiem) — PDMX `mxl/16/54/QmYyNzGvQ3GLKXeE3DBMyDYvPhotZHY8N6SBGTCW6UCiAY.mxl` · 4.9★ (64 ratings), 2798 views, 16 tracks, lyrics · uploader says publicdomain
- Panis angelicus (Franck) — PDMX `mxl/15/39/QmXQ32PQbfmbTsRBkzksuQsUHiydL7BHW9UaSoSyDT1GFe.mxl` · 4.8★ (21 ratings), 1016 views, 3 tracks, lyrics · uploader says publicdomain
- Va, pensiero (Verdi) — PDMX `mxl/12/25/QmUiSmBvKpe6yMnuC53Xfqnxs4ecAhfV6ZMy6k4BMszVh8.mxl` · 4.6★ (5 ratings), 325 views, 5 tracks, lyrics · uploader says publicdomain
- Os justi (Bruckner) — PDMX `mxl/9/0/QmR1qTwHaZYdASqnEvNUpuiMGpRGjNMn5BRrSivj1bsZHx.mxl` · 4.7★ (3 ratings), 98 views, 4 tracks, lyrics · uploader says publicdomain
- Locus iste (Bruckner) — PDMX `mxl/2/1/Qmc2gZdXaG9AgD1MoMUJr7NDqzKYBfmrktyqb8UCs15Ci8.mxl` · unrated, 45 views, 4 tracks, lyrics · uploader says publicdomain
- Jesu, Joy of Man's Desiring (Bach) — PDMX `mxl/4/45/QmeTWhNmpGNtrk8JLYLzPZ6bzhZNmeEKtCndbx5gu3dp9V.mxl` · 4.8★ (50 ratings), 1981 views, 5 tracks, lyrics · uploader says publicdomain

## Renaissance

- Exultate Deo (Palestrina) — PDMX `mxl/16/27/QmYJgCvNgGCNnfuUpeHBS9FKuCmD7wKdgzijDjcrrxjZkF.mxl` · 4.9★ (6 ratings), 173 views, 5 tracks, lyrics · uploader says publicdomain
- Ave Maria a4 (Palestrina) — PDMX `mxl/7/46/QmPu7o9Q5dtKpZdSFmxkwbdcunDQWnLnkQGMi6tZ1Dgtvq.mxl` · 4.8★ (9 ratings), 232 views, 4 tracks, lyrics · uploader says publicdomain
- O magnum mysterium (Victoria) — PDMX `mxl/5/10/QmfAKi96TAVh3wavAZxzq4eC1jPQe5C3rj9QB6mzDyLSEk.mxl` · 4.6★ (9 ratings), 381 views, 4 tracks, lyrics · uploader says publicdomain
- Sing Joyfully (Byrd) — PDMX `mxl/14/27/QmWJJ2QrAAg8RrtyjSXvKv96Bt9q6q8egx1ZXfqANScxhp.mxl` · 4.8★ (3 ratings), 232 views, 4 tracks, lyrics · uploader says publicdomain
- Verily, verily I say unto you (Tallis) — PDMX `mxl/6/47/QmNUsXypukSn7J2SKCk4ZySYg6xEy8w8dhaVFXZBRUwzKk.mxl` · 4.9★ (5 ratings), 114 views, 4 tracks, lyrics · uploader says publicdomain
- Mille regretz (Josquin) — PDMX `mxl/6/44/QmNt4bdKC1CPvwc8nhP9hPdyhufujANAeR4DovaEBbcho2.mxl` · unrated, 117 views, 4 tracks, lyrics · uploader says publicdomain
- Matona mia cara (Lassus) — PDMX `mxl/15/25/QmXik6wMyyHfKj1nC8H9SrSJj1iZK6SnuMZwLRT2EVspUK.mxl` · 4.5★ (3 ratings), 148 views, 4 tracks, lyrics · uploader says publicdomain
- The Silver Swan (Gibbons) — PDMX `mxl/13/6/QmV7Lyr9oFFKzDDSfHAKEmUBRR2q8LwvCJwFQb125gdZuk.mxl` · unrated, 100 views, 5 tracks, lyrics · uploader says publicdomain
- Pur ti miro (Monteverdi) — PDMX `mxl/12/1/QmU2cN6bFaZmCiWKZGHHc9AeqhqZMJh8sf86hhSGSSZixX.mxl` · 4.6★ (38 ratings), 1542 views, 3 tracks, lyrics · uploader says publicdomain

## Piano

- Prelude in C, BWV 846 (Bach) — PDMX `mxl/1/24/QmbHzrXuDGNG3HyzLpeBNeZ9wAj4bTDGWsZ5xz56abM8D8.mxl` · 4.8★ (3706 ratings), 511539 views, 1 tracks · uploader says publicdomain
- Für Elise (Beethoven) — PDMX `mxl/7/8/QmP9oEvzGLgupYF7PtV9QRNQ86mEsT35cBs47FcpVMJ4s2.mxl` · 4.9★ (6 ratings), 3539 views, 1 tracks · uploader says publicdomain
- Nocturne Op.9 No.2 (Chopin) — PDMX `mxl/3/4/Qmd5ipEVB79GcLu47C1xmjg69dBwXjffA4YPFCe3oHLKyc.mxl` · 4.8★ (9 ratings), 2787 views, 1 tracks · uploader says publicdomain
- Deux arabesques (Debussy) — PDMX `mxl/12/10/QmUAYMoNgNjpMXHGPeze3PJUxVMUG3EAWbnn6XQXnb9ufp.mxl` · 4.9★ (34 ratings), 2160 views, 1 tracks · uploader says publicdomain
- Rondo alla Turca (Mozart) — PDMX `mxl/6/21/QmNg5rJJQgdSBGEoDjricmzdDa5vtRdhXRYeAjJwMJi1RM.mxl` · 4.7★ (21 ratings), 9888 views, 1 tracks · uploader says publicdomain

## Baroque

- Canon in D (Pachelbel, easy) — PDMX `mxl/14/26/QmWjbVXhMRhcyo9d3Gknc8rTNB543TgNwAC4teG3iMNKKW.mxl` · 4.7★ (1563 ratings), 199200 views, 1 tracks · uploader says publicdomain
- Cello Suite No.1 Prelude (Bach) — PDMX `mxl/10/1/QmS23QLAQxnEaXmbSkUKKy3BCrodVyhLKFGWU1dABzVQqx.mxl` · 4.8★ (185 ratings), 18730 views, 1 tracks · uploader says publicdomain
- Air on the G String (Bach) — PDMX `mxl/15/5/QmX6WJtxDNDA7Mf6xR3c7w33tw3hUMkvFUJe6yfB5qmgmW.mxl` · 4.5★ (7 ratings), 4197 views, 2 tracks · uploader says publicdomain
- Wachet auf (Bach) — PDMX `mxl/4/44/QmetJbrFpiNGhPai3tSC9Z8L5azReNj4Lt6u9CensSk41M.mxl` · 4.7★ (47 ratings), 4323 views, 1 tracks · uploader says publicdomain
- Spring from The Four Seasons (Vivaldi) — PDMX `mxl/9/22/QmRGekqdmK9cx6YXm4p36AzcmN19nvAzyNNWiAD3jmiKHm.mxl` · 4.8★ (6 ratings), 11700 views, 1 tracks · uploader says publicdomain

## Orchestral

- Largo, New World Symphony (Dvořák) — PDMX `mxl/6/34/QmNNMfHzKdXsaUyFoL5LdLqDC1sYQAznnCZDuDWmKfm8ik.mxl` · 4.9★ (143 ratings), 10308 views, 18 tracks · uploader says publicdomain
- Dance of the Sugar Plum Fairy (Tchaikovsky) — PDMX `mxl/2/26/Qmcj8gXjgCTnbhZHt99y5ZFianqvgGw1RSJ45TQnL62XVt.mxl` · 4.6★ (108 ratings), 60332 views, 1 tracks · uploader says publicdomain
- Eine kleine Nachtmusik (Mozart) — PDMX `mxl/16/46/QmYuG1LqvMLVh84vWK6xP3AXtgSZ5Bunbnr3x6XGERbz3M.mxl` · 4.8★ (20 ratings), 3166 views, 18 tracks · uploader says publicdomain
- Hungarian Dance No.5 (Brahms) — PDMX `mxl/8/53/QmQXdFdtf9HoqCu4QjmtTaojujBNwc1BjAgd25yTZokJU7.mxl` · 4.6★ (45 ratings), 6429 views, 3 tracks · uploader says publicdomain
- In the Hall of the Mountain King (Grieg) — PDMX `mxl/11/4/QmT5K8dfnQoqbTSjkBgotv56Vt29WSpiP8L5pbMJEPaJhU.mxl` · 4.8★ (4 ratings), 1296 views, 3 tracks · uploader says publicdomain

## Ragtime & jazz

- Maple Leaf Rag (Joplin) — PDMX `mxl/8/25/QmQivFenf7PzC4UiXgYbzx3G11yvQaCXWeuwvTDMMpr6Nk.mxl` · 4.8★ (1892 ratings), 335718 views, 1 tracks · uploader says publicdomain
- Pineapple Rag (Joplin) — PDMX `mxl/13/28/QmVkN331msDqvpTR6s71j291HuGDqzVLqsaR5i6VjfeASK.mxl` · 4.8★ (39 ratings), 9650 views, 1 tracks · uploader says publicdomain
- The Entertainer (Joplin) — PDMX `mxl/0/9/Qmaa6zgW92mEVQXRgeDnZEJVkdWMJzJDKx31rgGfC1nMdK.mxl` · 4.9★ (7 ratings), 884 views, 3 tracks · uploader says publicdomain
- When the Saints Go Marching In — PDMX `mxl/8/43/QmQSGztG8eTXW2udzFsGMb2DtBffpaguTTgenoq6WDPs8e.mxl` · 4.3★ (3 ratings), 957 views, 1 tracks, lyrics · uploader says publicdomain

## Folk dance & world

- Swallowtail Jig — PDMX `mxl/5/39/QmfQckncWQ9gujfUh2LDWZEPt8CgqPTjYCzPJheoag85un.mxl` · 4.7★ (100 ratings), 41497 views, 1 tracks · uploader says publicdomain
- Greensleeves — PDMX `mxl/15/51/QmXWWkTSfAgQFZyzWeJPwGMBFsJR14DkAjZYCo8SSCC2gw.mxl` · 4.6★ (4 ratings), 1685 views, 1 tracks · uploader says publicdomain

## Patriotic

- The Star-Spangled Banner — PDMX `mxl/2/3/Qmc4iF5RoDVjAokdN7ZiQyb8o2gT7gGHZsKsWAb9FTEGKR.mxl` · 4.8★ (50 ratings), 10342 views, 2 tracks · uploader says publicdomain
- America the Beautiful — PDMX `mxl/1/40/Qmbr5wFrt5dnLrAUky3VCNfCrCQLG9bPTTWMqdPrNLU9dd.mxl` · 4.8★ (15 ratings), 530 views, 1 tracks, lyrics · uploader says publicdomain
- Battle Hymn of the Republic — PDMX `mxl/0/26/QmajfwAgfobt7SVb1pnGFiT44gfU9thwLjZhGFTkJ7AFBG.mxl` · unrated, 474 views, 1 tracks, lyrics · uploader says publicdomain

## Barbershop (CPDL)

From https://www.cpdl.org/wiki/index.php/Category:Barbershops (58 pages; 44 surveyed). Best candidates are four-part (TTBB) editions with MusicXML, by Rafael Ornes, of pre-1930 standards; the 'Old Songs Chorus' arrangements by C. J. Spatafora (edited by Ken Sambuchi) are three-part (TBB). All marked CPDL license unless noted. **Needs review by someone who knows competitive barbershop**, and a check for dated or offensive lyrics.

- TTBB with MusicXML: Peg o' My Heart; When You Wore a Tulip; Love Me and the World Is Mine; Margie; K-K-K-Katy; Peggy O'Neil; I Never Knew; When I Dream of Old Erin; Dear Old Girl; That's How I Need You; The Old Songs; In the Old Town Hall; Ireland Must Be Heaven; The Darktown Strutters' Ball; The West, a Nest and You; When Francis Dances with Me; The Curse of an Aching Heart; In All My Dreams I Dream of You
- Sweet Adeline: TTBB original (Rafael Ornes), plus an SATB re-arrangement (Udo Baake) and a TBB one
- TBB (three-part) from The Old Songs Chorus: Let Me Call You Sweetheart; Down by the Old Mill Stream; I Wonder Who's Kissing Her Now; In the Good Old Summer Time; My Wild Irish Rose; Ma (He's Making Eyes at Me); Memories; Smilin' Through; I've Been Working on the Railroad
- Public Domain marked: Heidelberg Stein Song (Douglas Walczak, TTBB); Good Night, Ladies (Brigid Baker, TTBB)
- No MusicXML: the Philip Le Bas arrangements (Scarborough Fair, Skye Boat Song, etc.) except Deep River; I Dream of Jeanie; Home on the Range (license 'Personal': skip)

Barbershop entries can use `"style": "barbershop"` (see README): rehearsal-room PR #53, merged and deployed as sha-313dcb2.

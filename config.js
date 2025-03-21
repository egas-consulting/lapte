var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNtNGxmc2Q5bDAxYjkya3M3ZGs1cDF2NzgifQ.JCvSbkquZpgPo4I1J83vNQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<p style="text-align: center; font-weight: 400; color: #328429; font-size: 1.4rem;"> Vacă sau migdală?<img src="plant.png" alt="Plant icon" style="height: 0.7em; width: auto; margin: 0 4px;"></p>',
    subtitle: '<span style="font-family: \'Roboto\'; color: #328429; font-size: 2.5rem; font-weight: 900; display: inline-flex; align-items: center; flex-wrap: wrap;">Renașterea laptelui. Cum au devenit alternativele vegetale noile vedete pe piața din România</span>',

    byline: '<a href="https://panorama.ro/author/panorama/" target="_blank" style="color:#328429;">Edit Gyenge</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 14 februarie 2025 <br> <a href="https://panorama.ro/author/andrei-luca-popescu/" target="_blank">Editor: Andrei Luca Popescu</a> ',
    chapters: [
        {
            id: 'cap1.1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: true,
            title: '',
            image: '',
            description: '',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        
        
        {
            id: 'cap1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: false,
            title: '',
            image: '',
            description: 'Cu doar un deceniu în urmă, laptele vegetal era un produs considerat „exotic”. Îl găseai în special în magazinele naturiste și era cunoscut mai mult de cei care fugeau de laptele tradițional, fie că  aveau intoleranță la lactoză sau erau adepții dietelor vegane. Astăzi, însă, cutii de lapte de soia, migdale, ovăz sau cocos sunt nelipsite de pe rafturile supermarketurilor și apar chiar și în micile magazine de cartier. Nu îți mai poți lua o cafea respectabilă, dacă nu treci mai întâi de chestionarul „ce fel de lapte doriți”.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap1.1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: false,
            title: '',
            image: '',
            description: 'Care sunt motivele din spatele acestei schimbări de comportament a consumatorilor români și ce ne arată datele? Am adunat informații, statistici și vizualizări interactive pentru a pune sub lupă drumul laptelui vegetal către popularitatea de azi, într-o țară unde laptele de vacă sau de oaie e totuna cu tradiția națională.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        


        {
            id: 'cap2',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'De la păstorit la obiceiuri culinare', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Românii au o îndelungată tradiție pastorală, iar laptele de vacă (și alte lactate) au fost de secole în centrul meselor pe care oamenii de aici le mănâncă. Dacă ne uităm în trecut, rădăcinile acestui obicei culinar merg până la comunitățile dacice, care consumau lactate sub diverse forme, iar în Evul Mediu, rețetele bazate pe brânzeturi, smântână și lapte se îmbogățeau prin schimburile culturale cu imperiile vecine.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap2.2',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'O situație paradoxală: iubim laptele, nu și vacile', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Deși păstoritul este și astăzi o activitate importantă în zonele montane (concentrată mai ales pe creșterea oilor), efectivele de bovine ale României rămân printre cele mai mici din Uniunea Europeană. Nu prea mai avem vaci. În plus, producția agricolă de lapte a scăzut în ultimele două decenii, conform datelor Institutului Național de Statistică.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },
        
        {
            id: 'cap3',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21630430/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21630430/?utm_source=embed&utm_campaign=visualisation/21630430" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        
        {
            id: 'cap5',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21631832/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21631832/?utm_source=embed&utm_campaign=visualisation/21631832" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap6',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Schimbări de stil de viață și preocupări pentru sănătate', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În ultimul deceniu, România a urmat trendul global al unei atenții sporite pentru alimentația sănătoasă. Dietele vegane, vegetariene sau flexitariene au căpătat avânt. La asta, se adaugă numărul tot mai mare de persoane cu intoleranță sau sensibilitate la lactoză. Un studiu realizat de Danone România arată că 39% dintre români consumă în prezent produse pe bază de plante, un procent semnificativ mai mare decât în urmă cu câțiva ani.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap6.1',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21674228/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21674228/?utm_source=embed&utm_campaign=visualisation/21674228" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap7',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'De la produs de nișă, la produse larg răspândite', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Inițial, laptele vegetal era dificil de găsit și relativ scump. Însă, pe fondul cererii în creștere, marile rețele de retail au început să introducă game variate de lapte de soia, migdale, ovăz, cocos sau orez. Astfel, consumatorii au descoperit o multitudine de arome și opțiuni, iar competiția dintre branduri – atât cele locale, cât și internaționale – a favorizat o scădere a prețurilor și o accesibilitate mai mare.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap8',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Impactul asupra mediului – argumentul sustenabilității', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Un alt factor major care impulsionează consumul de alternative vegetale ale laptelui este componenta de mediu. Conform mai multor studii la nivel european, produsele lactate pot reprezenta între un sfert și o treime din amprenta de carbon a dietei unei persoane. Resurse și emisii asociate producției de lapte: <br><b>•Suprafața de teren utilizată:</b> Creșterea bovinelor necesită suprafețe întinse pentru pășuni și producția de furaje.<br><b>•Apa consumată:</b> Producția unui litru de lapte de vacă poate avea nevoie de sute de litri de apă, atât pentru animale, cât și pentru irigarea furajelor.<br><b>•Emisiile de GES (gaze cu efect de seră):</b> Metanul provenit de la vaci are un puternic efect asupra încălzirii globale.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },
        {
            id: 'cap9',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21632298/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21632298/?utm_source=embed&utm_campaign=visualisation/21632298" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },
        {
            id: 'cap10',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21632740/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21632740/?utm_source=embed&utm_campaign=visualisation/21632740" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap11',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/21632782/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/21632782/?utm_source=embed&utm_campaign=visualisation/21632782" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap12',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: 'Profilul nutrițional – laptele de vacă vs laptele vegetal', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Deși alternativele vegetale câștigă teren în ceea ce privește sustenabilitatea și beneficiile pentru cei cu intoleranță la lactoză, diferențele nutriționale rămân semnificative: <br><b>•Proteine:</b> Laptele de vacă are aproximativ 3,4 g/100 ml, în timp ce laptele de migdale poate avea în jur de 0,5 g/100 ml. <br><b>•Aminoacizi esențiali:</b> Lactatele oferă un profil complet de aminoacizi, în timp ce laptele vegetal trebuie, în multe cazuri, combinat cu alte surse de proteine pentru acoperirea necesarului.<br><b>•Fortificare:</b> Majoritatea laptelui vegetal este îmbogățit cu calciu, vitamina D și B12, aspect crucial pentru vegetarieni și vegani.',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap12.1',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pentru a facilita comparația, <b>am creat un instrument interactiv (utilizând aplicația Eat&Track) care afișează profilul nutrițional al diverselor tipuri de lapte vegetal disponibil pe piață. Poți selecta produsul și nutrientul care te interesează pentru a vedea diferențele.</b>',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        
        {
            id: 'capCharts',
            daysAgo: 760, 
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: '',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },        



        
        

    ]
};
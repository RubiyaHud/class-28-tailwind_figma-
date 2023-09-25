

tailwind.config = {
    theme: {
        extend: {
            // color part start
            colors: {
                headerOverlay: 'rgba(22, 12, 109, 0.5)',
                hoverColor: '#1BBF00',
                headerTextColor: '#EFF4FA',
                bannerOverlay: 'rgba(106, 98, 197, 0.9)',
                bannerTextColor: '#FAFAFE',
                bannerPargraphTextColor: '#E6E5F3',
            },
            // color part end
            // container part start
            width: {
                hearderContainer: '1170px',
                bannerContainer: '962px',
            },
            // container part end

            // Font family Start
            fontFamily: {
                openSans: ['Open Sans', 'sans-serif'],
                paprika: ["Paprika, cursive"],
            },
            // Font family End

            // Background images start
            backgroundImage: {
                bannerImage: "url('images/banner_bg.png')",
                
            },
            // Background images end

            



        },
    },
};
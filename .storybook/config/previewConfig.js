export const previewConfig = {
    globalTypes: {
        toujouTheme: {
            description: 'Theme',
            toolbar: {
                icon: 'box',
                title: 'Theme',
                items: [
                    { value: 'toujou', title: 'Toujou' },
                    { value: 'kojo', title: 'Kojo' },
                ],
            },
        },
    },
    initialGlobals: {
        toujouTheme: 'kojo',
    },
};


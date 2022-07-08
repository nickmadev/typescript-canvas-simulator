import { ContainerComponent } from "../componentTypes";

const profileHeader: ContainerComponent = {
    id: "4ec40cc1-f706-40cd-8c29-5b1db8186b7a",
    type: "container",
    name: "Profile Header",
    frame: {
        x: 0,
        y: 0,
        width: 300,
        height: 196,
    },
    backgroundColor: {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
    },
    border: {
        color: {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        },
        width: 1,
    },
    cornerRadius: 0,
    children: [
        {
            id: "aed35889-8f83-453f-8a98-48464e6cb6a6",
            type: "text",
            name: "About Me",
            content: "About Me",
            fontSize: 12,
            fontWeight: 400,
            fontFamily: "Helvetica",
            textColor: {
                r: 0,
                g: 0,
                b: 0,
                a: 1,
            },
            frame: {
                x: 124,
                y: 173,
                width: 52,
                height: 14,
            },
        },
        {
            id: "ea1e408a-9cc8-4706-9236-ec6996df4006",
            type: "text",
            name: "Frank Smith",
            content: "Frank Smith",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "Helvetica",
            textColor: {
                r: 0,
                g: 0,
                b: 0,
                a: 1,
            },
            frame: {
                x: 104,
                y: 153,
                width: 87,
                height: 18,
            },
        },
        {
            id: "670f1396-37d1-43b7-818f-6ef501427157",
            type: "ellipse",
            name: "Avatar Shape",
            frame: {
                x: 90,
                y: 16,
                width: 120,
                height: 120,
            },
            backgroundColor: {
                r: 0.8509804010391235,
                g: 0.8509804010391235,
                b: 0.8509804010391235,
                a: 1,
            },
            border: {
                color: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1,
                },
                width: 1,
            },
        },
    ],
};

export default profileHeader;

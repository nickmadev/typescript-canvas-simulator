import { ContainerComponent } from "../componentTypes";

const eventCard: ContainerComponent = {
    id: "e229fb3d-32c8-4817-b58c-39d28b4caf68",
    type: "container",
    name: "Event Card",
    frame: {
        x: 0,
        y: 0,
        width: 320,
        height: 88,
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
            id: "93ac0d9b-0828-4c46-90f6-4f334c6d4c9f",
            type: "text",
            name: "Event Date",
            content: "March 23 at 5:00 PM",
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
                x: 84,
                y: 57,
                width: 112,
                height: 14,
            },
        },
        {
            id: "0d93f109-a4ea-4749-9bf7-65a5de29b147",
            type: "text",
            name: "Event Description",
            content: "Fun for the whole family!",
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
                x: 84,
                y: 37,
                width: 131,
                height: 14,
            },
        },
        {
            id: "1520f376-4cec-40c2-a92a-afd9b212ee3b",
            type: "text",
            name: "Event Name",
            content: "Honolulu Beach Walk",
            fontSize: 12,
            fontWeight: 700,
            fontFamily: "Helvetica",
            textColor: {
                r: 0.08235294371843338,
                g: 0.6470588445663452,
                b: 0.6117647290229797,
                a: 1,
            },
            frame: {
                x: 84,
                y: 16,
                width: 140,
                height: 14,
            },
        },
        {
            id: "0d015b7f-da91-415d-abad-bb50ad049e0e",
            type: "rectangle",
            name: "Photo Shape",
            frame: {
                x: 16,
                y: 16,
                width: 56,
                height: 56,
            },
            backgroundColor: {
                r: 0.8509804010391235,
                g: 0.8509804010391235,
                b: 0.8509804010391235,
                a: 1,
            },
            cornerRadius: 8,
        },
    ],
};

export default eventCard;

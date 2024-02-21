import { useState } from 'react';
import { Repeater } from './Repeater';

export default {
    title: 'Example/Repeater',
    component: Repeater,
    parameters: {
        // layout: 'x',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
        // color: { control: 'color' },
    },
    args: {
        value: ["Item 1", "Item 2", "Item 3"]
    }
};

export const Input = ({ value }) => {
    const [tempValue, setTempValue] = useState(value)
    return <Repeater value={tempValue} onChange={(newOptions) => setTempValue(newOptions)} />
}
export const Custom = ({ value }) => {
    const defaultTempValue = [{ name: "Item 1", link: "link 1" }, { name: "Item 2", link: "link 2" }]
    const [tempValue, setTempValue] = useState(defaultTempValue);
    return (
        <Repeater
            value={tempValue}
            onChange={(newOptions) => setTempValue(newOptions)}
            customItem={(option, index) => (
                <div className='be-repeater-menu-item'>
                    {option.name}
                </div>
            )}
        />
    )
};
// export const Custom = {
//     args: {
//         value: [{ name: "Item 1", link: "link 1" }, { name: "Item 2", link: "link 2" }],
//         customItem: (option) => (
//             <div className='be-repeater-menu-item'>
//                 {option.name}
//             </div>
//         ),
//     },
// };


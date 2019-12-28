import React, { useState } from 'react';
import {
    FloatingMenu,
    MainButton,
    ChildButton,
} from 'react-floating-button-menu';
import { MdAccessibility } from 'react-icons/md';
import { FaTextHeight, FaKeyboard } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import { IoMdContrast } from 'react-icons/io';
import '../../style/accessibility.css';

const AccessibilityButton = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div id="accessibility">
            <FloatingMenu
                slideSpeed={500}
                direction="down"
                isOpen={isOpen}>
                <MainButton
                    iconResting={<MdAccessibility size={30} />}
                    iconActive={<MdAccessibility size={30} />}
                    backgroundColor="white"
                    size={50}
                    onClick={() => setOpen(!isOpen)}
                />
                <ChildButton
                    icon={<FaTextHeight size={25} />}
                    backgroundColor="white"
                    size={50}
                />
                <ChildButton
                    icon={<AiFillSound size={25} />}
                    size={50}
                />
                <ChildButton
                    icon={<FaKeyboard size={25} />}
                    size={50}
                />
                <ChildButton
                    icon={<IoMdContrast size={25} />}
                    size={50}
                />
            </FloatingMenu>
        </div>
    )
};

export default AccessibilityButton;
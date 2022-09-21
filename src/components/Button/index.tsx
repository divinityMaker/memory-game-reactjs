import React from 'react'
import * as C from './styles'

interface Props {
    label: string
    icon?: any
    onClick: React.MouseEventHandler<HTMLDivElement> 
}

const Button: React.FC<Props> = ({label, icon, onClick}) => {
    return (
        <C.Container onClick={onClick}>
            {icon &&
            <C.IconArea>
                <C.Icon src={icon} />
            </C.IconArea>
            }
            <C.Label>
                {label}
            </C.Label>
        </C.Container>
    )
}

export default Button
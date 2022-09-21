import React from 'react';
import * as C from './styles'

interface Props {
    label: string
    value: string
}

const InfoItem: React.FC<Props> = ({label, value}) => {
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.Container>
    )
}

export default InfoItem
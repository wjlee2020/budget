import { Statistic } from 'semantic-ui-react'

export default function DisplayBalance({ title, value, color = "black", size = "tiny" }) {
    console.log(value);
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: "left" }}>
                {title}
            </Statistic.Label>
            <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
        </Statistic>
    )
}
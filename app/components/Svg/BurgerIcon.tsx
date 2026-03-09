type Props = {
    className?: string;
    width?: number;
    height?: number;
    color?:string;
};

export default function BurgerIcon({ className, width, height, color }: Props) {
    return (
    <svg className={className} width={width} height={height} role="img" viewBox="0 0 22 22" fill={color} stroke-width="1.5" stroke={color} xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    )
}
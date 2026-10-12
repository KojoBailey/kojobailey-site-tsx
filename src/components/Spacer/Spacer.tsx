function Spacer({ height = 16 }: { height?: number | string }) {
	return <div style={{ height }} aria-hidden="true" />
}

export default Spacer

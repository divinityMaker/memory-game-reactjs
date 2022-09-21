export const formatTimeElapsed = (seconds: number): string => {
    let minutes = Math.floor(seconds / 60)
    seconds -= (minutes * 60)

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
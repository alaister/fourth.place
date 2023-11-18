export function formatDistance(distance: number) {
  if (distance < 1000) {
    return `${distance.toLocaleString(undefined, {
      maximumFractionDigits: 0,
    })} m`
  }

  return `${(distance / 1000).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })} km`
}

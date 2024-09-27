// 주어진 문자열을 현재 시간과 비교, 계산하여 반환
export function calculateTime(givenTimeStr: string): string {
  const year = givenTimeStr.slice(0, 4);
  const month = givenTimeStr.slice(4, 6);
  const day = givenTimeStr.slice(6, 8);
  const hours = givenTimeStr.slice(9, 11);
  const minutes = givenTimeStr.slice(11, 13);
  const seconds = givenTimeStr.slice(13, 15);
  const isoDateStr = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;

  const formattedDate = new Date(isoDateStr);

  const currentTime = new Date();

  const timeDiffMs = Number(currentTime) - Number(formattedDate);

  const timeDiffDays = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));
  const timeDiffHours = Math.floor(
    (timeDiffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const timeDiffMinutes = Math.floor(
    (timeDiffMs % (1000 * 60 * 60)) / (1000 * 60)
  );

  let result;
  if (timeDiffDays > 0) {
    result = `${timeDiffDays}일 전`;
  } else if (timeDiffHours > 0) {
    result = `${timeDiffHours}시간 ${timeDiffMinutes}분 전`;
  } else {
    result = `${timeDiffMinutes}분 전`;
  }

  return result;
}

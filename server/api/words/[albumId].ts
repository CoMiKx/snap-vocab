import { Language } from "~/types/language"
import { getGristApi } from "~/utils/grist"

type WordRecord = {
  manualSort: number
  Photos: number[]
  UpdatedAt: number
  Album: number
  Language: Language
}

type PhotoRecord = {
  id: number
  Photo: number[]
}

export default defineEventHandler(async (event) => {
  const start = Date.now()
  const grist = getGristApi()
  const albumId = getRouterParam(event, "albumId")
  const filter = { Album: [Number(albumId)] }

  console.log('IN /api/words/')
  console.log('Filter:', filter)

  const [words, photos] = await Promise.all([
    grist.fetchTable("Words", filter),
    grist.fetchTable("Photos", {}),
  ])

  console.log('Words:', words)
  console.log('Photos:', photos)
  console.log(`[/api/words/${albumId}] took ${Date.now() - start}ms`)

  return words
    .map((record) => {
      const word = record as unknown as WordRecord
      const photoRefId = word.Photos?.[1]
      const photo = photos.find((photo) => photo.id === photoRefId)
      const attachmentId = (photo?.Photo as number[])?.[1]

      console.log('=== DEBUGGING WORD ===')
      console.log('Full word record:', JSON.stringify(word, null, 2))
      console.log('word.Photos:', word.Photos)
      console.log('word.Photos type:', typeof word.Photos)
      console.log('photoRefId extracted:', photoRefId)
      console.log('photo found:', JSON.stringify(photo, null, 2))
      if (photo) {
        console.log('photo.Photo:', photo.Photo)
        console.log('photo.Photo type:', typeof photo.Photo)
        console.log('attachmentId extracted:', attachmentId)
      }
      console.log('Final attachmentId:', attachmentId)
      return {
        ...word,
        photo,
        photoRefId,
        attachmentId,
      }
    })
    .sort((a, b) => b.UpdatedAt - a.UpdatedAt)
})

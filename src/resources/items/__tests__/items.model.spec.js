import { Item } from '../items.model'

describe('Item model', () => {
  describe('schema', () => {
    test('name', () => {
      const name = Item.schema.obj.name
      expect(name).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
      })
    })

    test('status', () => {
      const status = Item.schema.obj.status
      expect(status).toEqual({
        type: String,
        required: true,
        enum: ['active', 'complete', 'pastdue'],
        default: 'active',
      })
    })

    test('notes', () => {
      const notes = Item.schema.obj.notes
      expect(notes).toEqual(String)
    })

    test('due', () => {
      const due = Item.schema.obj.due
      expect(due).toEqual(Date)
    })
  })
})

/* eslint-disable */
import { mockMethods } from 'aspida-mock'
import * as Types from '../../../@types'

export type Methods = {
  get: {
    query: {
      company_id: number
      start_issue_date?: string
      end_issue_date?: string
      entry_side?: 'credit' | 'debit'
      account_item_id?: number
      min_amount?: number
      max_amount?: number
      partner_id?: number
      partner_code?: string
      item_id?: number
      section_id?: number
      segment_1_tag_id?: number
      segment_2_tag_id?: number
      segment_3_tag_id?: number
      comment_status?: 'posted_with_mention' | 'raised_with_mention' | 'resolved_with_mention' | 'posted' | 'raised' | 'resolved' | 'none'
      comment_important?: boolean
      adjustment?: 'only' | 'without'
      txn_number?: string
      offset?: number
      limit?: number
    }

    resBody: {
      manual_journals: Types.manualJournalResponse['manual_journal'][]
    }
  }

  post: {
    resBody: Types.manualJournalResponse
    reqFormat: URLSearchParams
    reqBody?: Types.manualJournalCreateParams
  }
}

export default mockMethods<Methods>({
  get: () => ({ status: 200, resBody: { manual_journals: [{ id: 1, company_id: 1, issue_date: 'a', adjustment: true, txn_number: 'a', details: [{ id: 1, entry_side: 'credit', account_item_id: 1, tax_code: 1, partner_id: 1, partner_name: 'a', partner_code: 'a', partner_long_name: 'a', item_id: 1, item_name: 'a', section_id: 1, section_name: 'a', tag_ids: [1], tag_names: ['a'], segment_1_tag_id: 1, segment_1_tag_name: 1, segment_2_tag_id: 1, segment_2_tag_name: 1, segment_3_tag_id: 1, segment_3_tag_name: 1, amount: 1, vat: 1, description: 'a' }] }] } }),
  post: () => ({ status: 200, resBody: { manual_journal: { id: 1, company_id: 1, issue_date: 'a', adjustment: true, txn_number: 'a', details: [{ id: 1, entry_side: 'credit', account_item_id: 1, tax_code: 1, partner_id: 1, partner_name: 'a', partner_code: 'a', partner_long_name: 'a', item_id: 1, item_name: 'a', section_id: 1, section_name: 'a', tag_ids: [1], tag_names: ['a'], segment_1_tag_id: 1, segment_1_tag_name: 1, segment_2_tag_id: 1, segment_2_tag_name: 1, segment_3_tag_id: 1, segment_3_tag_name: 1, amount: 1, vat: 1, description: 'a' }] } } })
})
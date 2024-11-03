/*
 * index.js
 * Copyright (c) 2022 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
    "config": {
        "html_language": "uk",
        "month_and_day_fns": "d MMMM y"
    },
    "form": {
        "name": "\u041d\u0430\u0437\u0432\u0430",
        "amount_min": "\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430",
        "amount_max": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0441\u0443\u043c\u0430",
        "url": "URL",
        "title": "\u041d\u0430\u0437\u0432\u0430",
        "first_date": "\u041f\u0435\u0440\u0448\u0430 \u0434\u0430\u0442\u0430",
        "repetitions": "\u041f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u043d\u044f",
        "description": "\u041e\u043f\u0438\u0441",
        "iban": "IBAN",
        "skip": "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0438",
        "date": "\u0414\u0430\u0442\u0430"
    },
    "list": {
        "name": "\u041d\u0430\u0437\u0432\u0430",
        "account_number": "Account number",
        "currentBalance": "\u041f\u043e\u0442\u043e\u0447\u043d\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441",
        "lastActivity": "\u041e\u0441\u0442\u0430\u043d\u043d\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u044f",
        "active": "\u0427\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u0438\u0439?"
    },
    "breadcrumbs": {
        "placeholder": "[Placeholder]",
        "budgets": "\u0411\u044e\u0434\u0436\u0435\u0442",
        "subscriptions": "\u041f\u0456\u0434\u043f\u0438\u0441\u043a\u0430",
        "transactions": "\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u0457",
        "title_expenses": "\u0412\u0438\u0442\u0440\u0430\u0442\u0438",
        "title_withdrawal": "\u0412\u0438\u0442\u0440\u0430\u0442\u0438",
        "title_revenue": "\u0414\u043e\u0445\u0456\u0434 \/ \u043f\u0440\u0438\u0431\u0443\u0442\u043e\u043a",
        "title_deposit": "\u0414\u043e\u0445\u0456\u0434 \/ \u043f\u0440\u0438\u0431\u0443\u0442\u043e\u043a",
        "title_transfer": "\u041f\u0435\u0440\u0435\u043a\u0430\u0437\u0438",
        "title_transfers": "\u041f\u0435\u0440\u0435\u043a\u0430\u0437\u0438",
        "asset_accounts": "\u041e\u0441\u043d\u043e\u0432\u043d\u0456 \u0440\u0430\u0445\u0443\u043d\u043a\u0438",
        "expense_accounts": "\u0420\u0430\u0445\u0443\u043d\u043a\u0438 \u0432\u0438\u0442\u0440\u0430\u0442",
        "revenue_accounts": "\u0414\u0436\u0435\u0440\u0435\u043b\u0430 \u0434\u043e\u0445\u043e\u0434\u0456\u0432",
        "liabilities_accounts": "\u0417\u043e\u0431\u043e\u0432'\u044f\u0437\u0430\u043d\u043d\u044f"
    },
    "firefly": {
        "administration_index": "Financial administration",
        "actions": "\u0414\u0456\u0457",
        "edit": "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",
        "delete": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",
        "reconcile": "Reconcile",
        "create_new_asset": "Create new asset account",
        "confirm_action": "\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0434\u0456\u044e",
        "new_budget": "\u041d\u043e\u0432\u0438\u0439 \u0431\u044e\u0434\u0436\u0435\u0442",
        "new_asset_account": "\u041d\u043e\u0432\u0438\u0439 \u0440\u0430\u0445\u0443\u043d\u043e\u043a \u0430\u043a\u0442\u0438\u0432\u0456\u0432",
        "newTransfer": "\u041d\u043e\u0432\u0438\u0439 \u043f\u0435\u0440\u0435\u043a\u0430\u0437",
        "submission_options": "Submission options",
        "apply_rules_checkbox": "Apply rules",
        "fire_webhooks_checkbox": "Fire webhooks",
        "newDeposit": "\u041d\u043e\u0432\u0456 \u043d\u0430\u0434\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
        "newWithdrawal": "\u041d\u043e\u0432\u0456 \u0432\u0438\u0442\u0440\u0430\u0442\u0438",
        "bills_paid": "\u041e\u043f\u043b\u0430\u0447\u0435\u043d\u0456 \u0440\u0430\u0445\u0443\u043d\u043a\u0438",
        "left_to_spend": "Left to spend",
        "no_budget": "(\u043f\u043e\u0437\u0430 \u0431\u044e\u0434\u0436\u0435\u0442\u043e\u043c)",
        "budgeted": "Budgeted",
        "spent": "Spent",
        "no_bill": "(no bill)",
        "rule_trigger_source_account_starts_choice": "\u0406\u043c'\u044f \u0432\u0438\u0445\u0456\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \": value\"..",
        "rule_trigger_source_account_ends_choice": "\u041d\u0430\u0437\u0432\u0430 \u0434\u0436\u0435\u0440\u0435\u043b\u0430 \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u0437\u0430\u043a\u0456\u043d\u0447\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430..",
        "rule_trigger_source_account_is_choice": "\u0406\u043c'\u044f \u0432\u0438\u0445\u0456\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u043c\u0456\u0441\u0442\u0438\u0442\u044c..",
        "rule_trigger_source_account_contains_choice": "\u041d\u0430\u0437\u0432\u0430 \u0434\u0436\u0435\u0440\u0435\u043b\u0430 \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u043c\u0456\u0441\u0442\u0438\u0442\u044c..",
        "rule_trigger_account_id_choice": "\u0406\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u044f \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u0454 \u0442\u043e\u0447\u043d\u043e\u044e..",
        "rule_trigger_source_account_id_choice": "\u0406\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u044f \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0434\u0436\u0435\u0440\u0435\u043b\u0430 \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u0454 \u0442\u043e\u0447\u043d\u043e\u044e..",
        "rule_trigger_destination_account_id_choice": "\u0406\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0446\u0456\u044f \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454 \u0442\u043e\u0447\u043d\u043e\u044e..",
        "rule_trigger_account_is_cash_choice": "\u0411\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u0440\u0430\u0445\u0443\u043d\u043e\u043a \u0454 \u0433\u043e\u0442\u0456\u0432\u043a\u043e\u0432\u0438\u043c",
        "rule_trigger_source_is_cash_choice": "\u0414\u0436\u0435\u0440\u0435\u043b\u043e\u043c \u0440\u0430\u0445\u0443\u043d\u043a\u043e\u043c \u0454 \u200b\u200b(\u0433\u043e\u0442\u0456\u0432\u043a\u043e\u0432\u0438\u0439) \u0440\u0430\u0445\u0443\u043d\u043e\u043a",
        "rule_trigger_destination_is_cash_choice": "\u0420\u0430\u0445\u0443\u043d\u043a\u043e\u043c \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0454 \u200b\u200b(\u0433\u043e\u0442\u0456\u0432\u043a\u043e\u0432\u0438\u0439) \u0440\u0430\u0445\u0443\u043d\u043e\u043a",
        "rule_trigger_source_account_nr_starts_choice": "\u041d\u043e\u043c\u0435\u0440 \u0434\u0436\u0435\u0440\u0435\u043b\u0430 \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \/ IBAN \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u044c\u0441\u044f \u0437..",
        "rule_trigger_source_account_nr_ends_choice": "\u041d\u043e\u043c\u0435\u0440 \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \/ IBAN \u0437\u0430\u043a\u0456\u043d\u0447\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430..",
        "rule_trigger_source_account_nr_is_choice": "\u041d\u043e\u043c\u0435\u0440 \u0434\u0436\u0435\u0440\u0435\u043b\u0430 \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \/ IBAN \u0454..",
        "rule_trigger_source_account_nr_contains_choice": "\u041d\u043e\u043c\u0435\u0440 \u0434\u0436\u0435\u0440\u0435\u043b\u0430 \u0440\u0430\u0445\u0443\u043d\u043a\u0443 \/ IBAN \u043c\u0456\u0441\u0442\u0438\u0442\u044c..",
        "rule_trigger_destination_account_starts_choice": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u044c\u0441\u044f \u0437..",
        "rule_trigger_destination_account_ends_choice": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0437\u0430\u043a\u0456\u043d\u0447\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430..",
        "rule_trigger_destination_account_is_choice": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a-\u043e\u0434\u0435\u0440\u0436\u0443\u0432\u0430\u0447..",
        "rule_trigger_destination_account_contains_choice": "\u0406\u043c'\u044f \u0440\u0430\u0445\u0443\u043d\u043e\u043a\u0443-\u043e\u0434\u0435\u0440\u0436\u0443\u0432\u0430\u0447\u0430 \u043c\u0456\u0441\u0442\u0438\u0442\u044c..",
        "rule_trigger_destination_account_nr_starts_choice": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \/ IBAN \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u044c\u0441\u044f \u0437..",
        "rule_trigger_destination_account_nr_ends_choice": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \/ IBAN \u0437\u0430\u043a\u0456\u043d\u0447\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430..",
        "rule_trigger_destination_account_nr_is_choice": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \/ IBAN..",
        "rule_trigger_destination_account_nr_contains_choice": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \/ IBAN \u043c\u0456\u0441\u0442\u0438\u0442\u044c..",
        "rule_trigger_transaction_type_choice": "\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u044f \u043c\u0430\u0454 \u0442\u0438\u043f..",
        "rule_trigger_category_is_choice": "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f \u0454..",
        "rule_trigger_amount_less_choice": "\u0421\u0443\u043c\u0430 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0456\u0436..",
        "rule_trigger_amount_is_choice": "\u0421\u0443\u043c\u0430..",
        "rule_trigger_amount_more_choice": "\u0421\u0443\u043c\u0430 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0456\u0436..",
        "rule_trigger_description_starts_choice": "\u041e\u043f\u0438\u0441 \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u0442\u044c\u0441\u044f \u0437..",
        "rule_trigger_description_ends_choice": "\u041e\u043f\u0438\u0441 \u0437\u0430\u043a\u0456\u043d\u0447\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430..",
        "rule_trigger_description_contains_choice": "\u041e\u043f\u0438\u0441 \u043c\u0456\u0441\u0442\u0438\u0442\u044c..",
        "rule_trigger_description_is_choice": "\u041e\u043f\u0438\u0441..",
        "rule_trigger_date_on_choice": "\u0414\u0430\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457..",
        "rule_trigger_date_before_choice": "\u0414\u0430\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457 \u0440\u0430\u043d\u0456\u0448\u0435..",
        "rule_trigger_date_after_choice": "\u0414\u0430\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457 \u043f\u0456\u0437\u043d\u0456\u0448\u0435..",
        "rule_trigger_created_at_on_choice": "\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u0431\u0443\u043b\u0430 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0430..",
        "rule_trigger_updated_at_on_choice": "\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u0431\u0443\u043b\u0430 \u0432\u0456\u0434\u0440\u0435\u0434\u0430\u0433\u043e\u0432\u0430\u043d\u0430..",
        "rule_trigger_budget_is_choice": "\u0411\u044e\u0434\u0436\u0435\u0442..",
        "rule_trigger_tag_is_choice": "\u0411\u0443\u0434\u044c-\u044f\u043a\u0430 \u043c\u0456\u0442\u043a\u0430..",
        "rule_trigger_currency_is_choice": "\u0412\u0430\u043b\u044e\u0442\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439 \u0454..",
        "rule_trigger_foreign_currency_is_choice": "\u0412\u0430\u043b\u044e\u0442\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457 \u0454..",
        "rule_trigger_has_attachments_choice": "\u041c\u0430\u0454 \u043f\u0440\u0438\u043d\u0430\u0439\u043c\u043d\u0456 \u0446\u044e \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u043a\u043b\u0430\u0434\u0435\u043d\u044c",
        "rule_trigger_has_no_category_choice": "\u0411\u0435\u0437 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457",
        "rule_trigger_has_any_category_choice": "\u041c\u0430\u0454 (\u0431\u0443\u0434\u044c-\u044f\u043a\u0443) \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",
        "rule_trigger_has_no_budget_choice": "\u041d\u0435\u043c\u0430\u0454 \u043f\u043e\u0432'\u044f\u0437\u0430\u043d\u043e\u0433\u043e \u0431\u044e\u0434\u0436\u0435\u0442\u0443",
        "rule_trigger_has_any_budget_choice": "\u041c\u0430\u0454 (\u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439) \u0431\u044e\u0434\u0436\u0435\u0442",
        "rule_trigger_has_no_bill_choice": "\u041d\u0435 \u043c\u0430\u0454 \u0440\u0430\u0445\u0443\u043d\u043a\u0456\u0432 \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438",
        "rule_trigger_has_any_bill_choice": "\u041c\u0430\u0454 (\u044f\u043a\u0438\u0439\u0441\u044c) \u0440\u0430\u0445\u0443\u043d\u043e\u043a \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438",
        "rule_trigger_has_no_tag_choice": "\u041d\u0435\u043c\u0430\u0454 \u0442\u0435\u0433\u0456\u0432",
        "rule_trigger_has_any_tag_choice": "\u0404 \u043e\u0434\u0438\u043d \u0430\u0431\u043e \u043a\u0456\u043b\u044c\u043a\u0430 \u0442\u0435\u0433\u0456\u0432 (\u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0445)",
        "rule_trigger_any_notes_choice": "\u041c\u0430\u0454 (\u0431\u0443\u0434\u044c-\u044f\u043a\u0456) \u043d\u043e\u0442\u0430\u0442\u043a\u0438",
        "rule_trigger_no_notes_choice": "\u041d\u043e\u0442\u0430\u0442\u043a\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456",
        "rule_trigger_notes_is_choice": "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438..",
        "rule_trigger_notes_contains_choice": "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438 \u043c\u0456\u0441\u0442\u044f\u0442\u044c..",
        "rule_trigger_notes_starts_choice": "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438 \u043f\u043e\u0447\u0438\u043d\u0430\u044e\u0442\u044c\u0441\u044f \u0437..",
        "rule_trigger_notes_ends_choice": "\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0443\u044e\u0442\u044c\u0441\u044f \u043d\u0430..",
        "rule_trigger_bill_is_choice": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438..",
        "rule_trigger_external_id_is_choice": "\u0417\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u0439 ID \u043c\u0456\u0441\u0442\u0438\u0442\u044c..",
        "rule_trigger_internal_reference_is_choice": "\u0412\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0454 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f - \u0446\u0435..",
        "rule_trigger_journal_id_choice": "\u0406\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 \u0436\u0443\u0440\u043d\u0430\u043b\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0439 \u0454..",
        "rule_trigger_any_external_url_choice": "\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u043c\u0430\u0454 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044e URL-\u0430\u0434\u0440\u0435\u0441\u0443",
        "rule_trigger_no_external_url_choice": "\u041e\u043f\u0435\u0440\u0430\u0446\u0456\u044f \u043d\u0435 \u043c\u0430\u0454 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0457 URL-\u0430\u0434\u0440\u0435\u0441\u0438",
        "rule_trigger_id_choice": "\u0406\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457..",
        "rule_action_delete_transaction_choice": "\u0412\u0418\u0414\u0410\u041b\u0418\u0422\u0418 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u044e(!)",
        "rule_action_set_category_choice": "\u041e\u0431\u0440\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e..",
        "rule_action_clear_category_choice": "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457",
        "rule_action_set_budget_choice": "\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 \u0431\u044e\u0434\u0436\u0435\u0442..",
        "rule_action_clear_budget_choice": "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u0431\u044e\u0434\u0436\u0435\u0442\u0438",
        "rule_action_add_tag_choice": "\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u0435\u0433..",
        "rule_action_remove_tag_choice": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0442\u0435\u0433..",
        "rule_action_remove_all_tags_choice": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0443\u0441\u0456 \u0442\u0435\u0433\u0438",
        "rule_action_set_description_choice": "Set description to ..",
        "rule_action_update_piggy_choice": "Add \/ remove transaction amount in piggy bank ..",
        "rule_action_append_description_choice": "Append description with ..",
        "rule_action_prepend_description_choice": "Prepend description with ..",
        "rule_action_set_source_account_choice": "Set source account to ..",
        "rule_action_set_destination_account_choice": "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0446\u0456\u043b\u044c\u043e\u0432\u0438\u0439 \u0440\u0430\u0445\u0443\u043d\u043e\u043a..",
        "rule_action_append_notes_choice": "\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0442\u0430\u0442\u043a\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ..",
        "rule_action_prepend_notes_choice": "\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0434\u043e \u043d\u043e\u0442\u0430\u0442\u043e\u043a ..",
        "rule_action_clear_notes_choice": "\u0412\u0438\u0434\u0430\u043b\u0456\u0442\u044c \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0438",
        "rule_action_set_notes_choice": "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043d\u043e\u0442\u0430\u0442\u043a\u0438 \u0434\u043e ..",
        "rule_action_link_to_bill_choice": "\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u0440\u0430\u0445\u0443\u043d\u043e\u043a \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438 ..",
        "rule_action_convert_deposit_choice": "\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u044e \u0432 \u0434\u0435\u043f\u043e\u0437\u0438\u0442",
        "rule_action_convert_withdrawal_choice": "\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0456\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u044e \u043d\u0430 \u0437\u043d\u044f\u0442\u0442\u044f",
        "rule_action_convert_transfer_choice": "\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457 \u043d\u0430 \u043f\u0435\u0440\u0435\u043a\u0430\u0437",
        "placeholder": "[Placeholder]",
        "recurrences": "Recurring transactions",
        "title_expenses": "\u0412\u0438\u0442\u0440\u0430\u0442\u0438",
        "title_withdrawal": "\u0412\u0438\u0442\u0440\u0430\u0442\u0438",
        "title_revenue": "\u0414\u043e\u0445\u0456\u0434 \/ \u043f\u0440\u0438\u0445\u0456\u0434",
        "pref_1D": "\u041e\u0434\u0438\u043d \u0434\u0435\u043d\u044c",
        "pref_1W": "\u041e\u0434\u0438\u043d \u0442\u0438\u0436\u0434\u0435\u043d\u044c",
        "pref_1M": "\u041e\u0434\u0438\u043d \u043c\u0456\u0441\u044f\u0446\u044c",
        "pref_3M": "\u0422\u0440\u0438 \u043c\u0456\u0441\u044f\u0446\u0456 (\u043a\u0432\u0430\u0440\u0442\u0430\u043b)",
        "pref_6M": "\u0428\u0456\u0441\u0442\u044c \u043c\u0456\u0441\u044f\u0446\u0456\u0432",
        "pref_1Y": "\u041e\u0434\u0438\u043d \u0440\u0456\u043a",
        "repeat_freq_yearly": "\u0437\u0430 \u0440\u043e\u043a\u0430\u043c\u0438",
        "repeat_freq_half-year": "\u043a\u043e\u0436\u043d\u0438\u0445 \u043f\u0456\u0432\u0440\u043e\u043a\u0443",
        "repeat_freq_quarterly": "\u0437\u0430 \u043a\u0432\u0430\u0440\u0442\u0430\u043b\u0430\u043c\u0438",
        "repeat_freq_monthly": "\u0449\u043e\u043c\u0456\u0441\u044f\u0446\u044f",
        "repeat_freq_weekly": "\u0449\u043e\u0442\u0438\u0436\u043d\u044f",
        "single_split": "\u0420\u043e\u0437\u0434\u0456\u043b\u0438\u0442\u0438",
        "asset_accounts": "Asset accounts",
        "expense_accounts": "\u0420\u0430\u0445\u0443\u043d\u043a\u0438 \u0432\u0438\u0442\u0440\u0430\u0442",
        "liabilities_accounts": "\u041f\u0430\u0441\u0438\u0432\u0438",
        "undefined_accounts": "Accounts",
        "name": "Name",
        "revenue_accounts": "\u0414\u0436\u0435\u0440\u0435\u043b\u0430 \u0434\u043e\u0445\u043e\u0434\u0456\u0432",
        "description": "Description",
        "category": "Category",
        "title_deposit": "\u0414\u043e\u0445\u0456\u0434 \/ \u043f\u0440\u0438\u0445\u0456\u0434",
        "title_transfer": "\u041f\u0435\u0440\u0435\u043a\u0430\u0437",
        "title_transfers": "\u041f\u0435\u0440\u0435\u043a\u0430\u0437\u0438",
        "piggyBanks": "Piggy banks",
        "rules": "\u041f\u0440\u0430\u0432\u0438\u043b\u0430",
        "accounts": "\u0420\u0430\u0445\u0443\u043d\u043a\u0438",
        "categories": "\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457",
        "tags": "\u0422\u0435\u0433\u0438",
        "object_groups_page_title": "Groups",
        "reports": "\u0417\u0432\u0456\u0442\u0438",
        "webhooks": "\u0412\u0435\u0431-\u0433\u0430\u043a\u0438",
        "currencies": "\u0412\u0430\u043b\u044e\u0442\u0438",
        "administration": "Administration",
        "profile": "\u041f\u0440\u043e\u0444\u0456\u043b\u044c",
        "source_account": "\u0412\u0438\u0445\u0456\u0434\u043d\u0438\u0439 \u0440\u0430\u0445\u0443\u043d\u043e\u043a",
        "destination_account": "\u0420\u0430\u0445\u0443\u043d\u043e\u043a \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",
        "amount": "Amount",
        "date": "Date",
        "time": "Time",
        "preferences": "Preferences",
        "transactions": "Transactions",
        "balance": "Balance",
        "budgets": "\u0411\u044e\u0434\u0436\u0435\u0442\u0438",
        "subscriptions": "\u041f\u0456\u0434\u043f\u0438\u0441\u043a\u0438",
        "welcome_back": "\u0429\u043e \u0432 \u0433\u0430\u043c\u0430\u043d\u0446\u0456?",
        "bills_to_pay": "\u0420\u0430\u0445\u0443\u043d\u043a\u0438 \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438",
        "net_worth": "\u0427\u0438\u0441\u0442\u0456 \u0430\u043a\u0442\u0438\u0432\u0438",
        "pref_last365": "Last year",
        "pref_last90": "Last 90 days",
        "pref_last30": "Last 30 days",
        "pref_last7": "Last 7 days",
        "pref_YTD": "Year to date",
        "pref_QTD": "Quarter to date",
        "pref_MTD": "Month to date"
    }
}

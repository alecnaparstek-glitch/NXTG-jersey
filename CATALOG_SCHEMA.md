# Suggested catalog schema

products:
- id
- name
- slug
- team_id
- league_id
- season
- jersey_type
- kit_type (home/away/third)
- player_name
- jersey_number
- description
- price
- image_urls
- sizes
- customizable
- featured
- new_arrival
- best_seller
- available
- inventory_quantity
- search_keywords
- source_identifier
- created_at
- updated_at

teams:
- id
- name
- slug
- league_id
- country
- logo_url
- banner_url

leagues:
- id
- name
- slug
- country_or_region

orders:
- id
- customer_name
- email
- phone
- shipping_address
- subtotal
- shipping
- tax
- total
- payment_status
- fulfillment_status
- stripe_payment_id
- created_at

order_items:
- id
- order_id
- product_id
- quantity
- size
- custom_name
- custom_number
- unit_price

Use database indexes/full-text search on product name, team, league, season, player name, and keywords.

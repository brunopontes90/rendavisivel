// ACTION REQUIRED: replace the placeholders below with real Kiwify IDs/URLs before going live.
export const CHECKOUT_URL = "https://pay.kiwify.com.br/SEU_LINK_FOLEGO";

export const PIXEL_ID = "1719817905110207"; // existing pixel (keeps historical data)

export const PRICE = {
  full: 197,
  fullLabel: "R$ 197",
  installments: "12x de R$ 20,37", // confirm the exact installment value in the Kiwify checkout
  anchor: "R$ 705",
};

export const UPSELL = {
  price: "R$ 97",
  anchor: "R$ 197",
  kiwifyId: "SEU_ID_UPSELL", // e.g. aNnhUaH — taken from the Kiwify one-click upsell embed code
};

export const PRODUCT = {
  name: "Protocolo Fôlego",
  contentId: "protocolo-folego",
};

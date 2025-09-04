// app/api/webhook/route.js

import { NextResponse } from 'next/server'

export async function POST(request) {
  // 1. Pega os dados enviados pelo cliente (step26, step28, etc.)
  const data = await request.json()
  
  // 2. Define a URL real do webhook (mantida em segredo no servidor)
  const WEBHOOK_URL = "https://get.flwg.cc/webhook/49e56c7951d9fefe1a82c831185a9b78a2317d3502381595692c62debcde33d2";

  try {
    // 3. Envia os dados para o webhook externo
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Se o webhook externo retornar um erro, repassa o erro
    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    
    // 4. Retorna uma resposta de sucesso para o cliente
    return NextResponse.json({ message: 'Data sent successfully', data: responseData });

  } catch (error) {
    console.error("Error forwarding to webhook:", error);
    // 5. Retorna uma resposta de erro para o cliente
    return NextResponse.json({ message: 'Error forwarding to webhook', error: error.message }, { status: 500 });
  }
}

import React from 'react';
import { X, Printer, Download, CheckCircle, Clock, AlertCircle, QrCode, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem, CheckoutCustomer } from '../types';

interface NotaDeVentaModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  customer: CheckoutCustomer;
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  onMarkAsPaid?: () => void;
}

export const NotaDeVentaModal: React.FC<NotaDeVentaModalProps> = ({
  isOpen,
  onClose,
  items,
  customer,
  subtotal,
  discount,
  shipping,
  tax,
  total,
  onMarkAsPaid,
}) => {
  if (!isOpen) return null;

  const orderNumber = `NV-2026-${Math.floor(100000 + Math.random() * 900000)}`;
  const barcodeValue = `78294182${Math.floor(1000 + Math.random() * 9000)}`;
  const today = new Date();
  const dueDate = new Date(today.getTime() + 48 * 60 * 60 * 1000);

  const formattedToday = today.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedDueDate = dueDate.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full border border-gray-300 shadow-2xl overflow-hidden my-4 max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Action Header (No Print) */}
        <div className="no-print bg-[#183B2B] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-[#FBBF24]" />
            <span className="font-serif text-lg font-bold">Nota de Venta & Comprobante de Pago</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#183B2B] text-xs font-black uppercase rounded-xl transition-colors flex items-center gap-1.5 shadow"
            >
              <Printer size={15} />
              <span>Imprimir Nota</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Area */}
        <div id="printable-voucher" className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-gray-900 font-sans space-y-6">
          
          {/* Header del Ticket / Factura */}
          <div className="border-b-2 border-dashed border-gray-300 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl font-extrabold text-[#183B2B] tracking-tight">
                  OLIPOP
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#15803D]" />
              </div>
              <div className="text-xs text-gray-500 font-medium mt-1">
                OLIPOP Beverage Company Inc.
              </div>
              <div className="text-[11px] text-gray-500">
                RFC / Tax ID: OLI-920815-US1 · Registro Comercial N° 48102
              </div>
              <div className="text-[11px] text-gray-500">
                Oakland, CA 94612 · soporte@drinkolipop.com · Tel: 1-800-555-6547
              </div>
            </div>

            <div className="text-left sm:text-right bg-amber-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl w-full sm:w-auto border sm:border-0 border-amber-200">
              <span className="text-[10px] font-black tracking-widest text-[#183B2B] bg-[#FDE68A] px-2 py-0.5 rounded uppercase">
                COMPROBANTE OFICIAL
              </span>
              <div className="font-mono text-xl font-bold text-gray-900 mt-1">
                {orderNumber}
              </div>
              <div className="text-[11px] text-gray-600">
                Emisión: <strong>{formattedToday}</strong>
              </div>
              <div className="text-[11px] text-red-600 font-bold flex items-center sm:justify-end gap-1 mt-0.5">
                <Clock size={12} />
                <span>Pagar antes de: {formattedDueDate}</span>
              </div>
            </div>
          </div>

          {/* Banner de Estado Pendiente y Código de Pago */}
          <div className="bg-[#FAF6EE] border border-[#E8DEC9] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-black uppercase text-[#D7385E] tracking-wider">
                ESTADO: PENDIENTE DE PAGO EN CAJA / AGENTE
              </span>
              <h4 className="font-serif text-base font-bold text-[#183B2B]">
                Presenta esta nota para pagar en cualquier punto autorizado
              </h4>
              <p className="text-xs text-gray-600">
                Código de Pago / Referencia CIP: <strong className="font-mono text-sm text-[#183B2B] tracking-wider">{barcodeValue}</strong>
              </p>
            </div>

            {/* Código de barras simulado en SVG */}
            <div className="flex flex-col items-center shrink-0">
              <svg className="w-44 h-12" viewBox="0 0 160 40">
                {/* Barras alternadas */}
                <rect x="0" y="0" width="3" height="32" fill="#000" />
                <rect x="5" y="0" width="2" height="32" fill="#000" />
                <rect x="10" y="0" width="4" height="32" fill="#000" />
                <rect x="16" y="0" width="1" height="32" fill="#000" />
                <rect x="19" y="0" width="3" height="32" fill="#000" />
                <rect x="25" y="0" width="5" height="32" fill="#000" />
                <rect x="33" y="0" width="2" height="32" fill="#000" />
                <rect x="38" y="0" width="4" height="32" fill="#000" />
                <rect x="45" y="0" width="2" height="32" fill="#000" />
                <rect x="50" y="0" width="6" height="32" fill="#000" />
                <rect x="59" y="0" width="1" height="32" fill="#000" />
                <rect x="63" y="0" width="3" height="32" fill="#000" />
                <rect x="69" y="0" width="4" height="32" fill="#000" />
                <rect x="76" y="0" width="2" height="32" fill="#000" />
                <rect x="81" y="0" width="5" height="32" fill="#000" />
                <rect x="89" y="0" width="1" height="32" fill="#000" />
                <rect x="93" y="0" width="3" height="32" fill="#000" />
                <rect x="99" y="0" width="4" height="32" fill="#000" />
                <rect x="106" y="0" width="2" height="32" fill="#000" />
                <rect x="111" y="0" width="5" height="32" fill="#000" />
                <rect x="119" y="0" width="3" height="32" fill="#000" />
                <rect x="125" y="0" width="4" height="32" fill="#000" />
                <rect x="132" y="0" width="2" height="32" fill="#000" />
                <rect x="137" y="0" width="5" height="32" fill="#000" />
                <rect x="145" y="0" width="2" height="32" fill="#000" />
                <rect x="150" y="0" width="4" height="32" fill="#000" />
                <rect x="157" y="0" width="2" height="32" fill="#000" />
                <text x="80" y="39" textAnchor="middle" fontSize="7" fontFamily="monospace" fill="#000">
                  {barcodeValue}
                </text>
              </svg>
            </div>
          </div>

          {/* Datos del Cliente y Envío */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs border border-gray-200 p-4 rounded-2xl bg-gray-50/50">
            <div>
              <span className="font-bold uppercase tracking-wider text-gray-500 text-[10px] block mb-1">
                DATOS DEL CLIENTE
              </span>
              <div className="font-bold text-gray-900 text-sm">
                {customer.firstName || 'Cliente'} {customer.lastName || ''}
              </div>
              <div className="text-gray-600 mt-0.5">
                Correo: {customer.email || 'No proporcionado'}
              </div>
              <div className="text-gray-600">
                Teléfono: {customer.phone || 'No proporcionado'}
              </div>
            </div>

            <div>
              <span className="font-bold uppercase tracking-wider text-gray-500 text-[10px] block mb-1">
                DIRECCIÓN DE ENTREGA
              </span>
              <div className="font-bold text-gray-900 text-sm">
                {customer.address || 'Entrega en tienda / Sucursal'}
              </div>
              <div className="text-gray-600 mt-0.5">
                {customer.city ? `${customer.city}, ${customer.state} ${customer.zip}` : 'Estados Unidos'}
              </div>
              <div className="text-gray-600">
                País: {customer.country || 'Estados Unidos'}
              </div>
            </div>
          </div>

          {/* Tabla de Productos / Ítems */}
          <div>
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300 text-gray-600 uppercase text-[10px]">
                  <th className="py-2.5 font-bold">Cant.</th>
                  <th className="py-2.5 font-bold">Descripción del Producto</th>
                  <th className="py-2.5 font-bold text-right">Precio Unit.</th>
                  <th className="py-2.5 font-bold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((item) => {
                  const price = item.purchaseType === 'subscription' ? item.flavor.subscriptionPrice : item.flavor.price;
                  return (
                    <tr key={item.id} className="py-2">
                      <td className="py-2.5 font-bold font-mono text-gray-900">{item.quantity}x</td>
                      <td className="py-2.5 text-gray-900">
                        <span className="font-bold text-sm block">{item.flavor.name} (Case 12 latas)</span>
                        <span className="text-[11px] text-gray-500">
                          {item.purchaseType === 'subscription' ? 'Suscripción Periódica (15% OFF)' : 'Venta Individual 12-Pack'} · 9g Fibra Prebiótica
                        </span>
                      </td>
                      <td className="py-2.5 text-right font-mono text-gray-700">
                        ${price.toFixed(2)}
                      </td>
                      <td className="py-2.5 text-right font-mono font-bold text-gray-900">
                        ${(price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Desglose de Totales */}
          <div className="border-t-2 border-gray-300 pt-4 flex flex-col sm:flex-row justify-between items-start gap-4">
            
            {/* Instrucciones de Pago para el Cliente */}
            <div className="w-full sm:max-w-sm space-y-2 text-[11px] text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200">
              <span className="font-bold uppercase tracking-wider text-gray-700 block">
                ¿CÓMO PAGAR CON ESTA NOTA?
              </span>
              <p>
                <strong>1. En Agente / Banco / Tienda:</strong> Dicta el Código de Referencia <code className="bg-gray-200 px-1 rounded">{barcodeValue}</code> o entrega el código de barras impreso.
              </p>
              <p>
                <strong>2. Pago Móvil / Billetera Digital:</strong> Escanea el comprobante desde la app bancaria para transferencia directa.
              </p>
              <p>
                <strong>3. Contra Entrega:</strong> Entrega el importe exacto en efectivo al courier al momento de recibir tus cajas refrigeradas.
              </p>
            </div>

            {/* Cuadro de Totales */}
            <div className="w-full sm:w-64 space-y-1.5 text-xs text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal Neto:</span>
                <span className="font-mono">${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-700 font-bold">
                  <span>Descuento Promocional:</span>
                  <span className="font-mono">-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Costo de Envío:</span>
                <span className="font-mono">
                  {shipping === 0 ? <strong className="text-green-700">GRATIS ($0.00)</strong> : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Impuestos Estimados (IVA/Sales Tax):</span>
                <span className="font-mono">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t-2 border-gray-900 text-base font-black text-gray-900">
                <span>TOTAL A PAGAR:</span>
                <span className="font-mono text-xl">${total.toFixed(2)} USD</span>
              </div>
            </div>

          </div>

          {/* Pie del Documento */}
          <div className="border-t border-dashed border-gray-300 pt-4 text-center space-y-1 text-[10px] text-gray-500">
            <p className="font-bold">
              ¡Gracias por elegir OLIPOP! Tu pedido se despachará inmediatamente una vez registrado el pago.
            </p>
            <p>
              Garantía de Satisfacción 100% en 30 días · www.drinkolipop.com · Conservar este comprobante para cualquier reclamo.
            </p>
          </div>

        </div>

        {/* Footer Actions (No Print) */}
        <div className="no-print bg-gray-50 border-t border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-500 flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-green-600" />
            <span>Documento generado con firma y folio digital válido</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-5 py-3 bg-[#183B2B] hover:bg-[#122E22] text-white font-bold text-xs uppercase rounded-xl transition-colors flex items-center justify-center gap-2 shadow"
            >
              <Printer size={16} />
              <span>Imprimir Nota de Venta</span>
            </button>

            {onMarkAsPaid && (
              <button
                onClick={() => {
                  onMarkAsPaid();
                  onClose();
                }}
                className="flex-1 sm:flex-initial px-5 py-3 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs uppercase rounded-xl transition-colors flex items-center justify-center gap-2 shadow"
              >
                <CheckCircle size={16} />
                <span>Ya Realicé el Pago</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';

// --- STYLES OBJECTS (Modern Blue Theme) ---
const styles = {
    // --- Layout & General Styles ---
    appContainer: {
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: '24px',
        background: 'radial-gradient(circle at top left, #e0f2fe 0, #f4f7fb 40%, #eef2ff 100%)',
        minHeight: '100vh',
        boxSizing: 'border-box',
    },
    header: {
        textAlign: 'center',
        padding: '20px 24px',
        marginBottom: '32px',
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
        border: '1px solid #e2e8f0',
    },
    h1: {
        fontSize: '2.4rem',
        color: '#1f2937',
        fontWeight: '800',
        margin: 0,
        letterSpacing: '.03em',
    },
    subtitle: {
        marginTop: '8px',
        fontSize: '0.95rem',
        color: '#6b7280',
    },
    headerBadgeRow: {
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
    },
    chip: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '.12em',
        padding: '4px 10px',
        borderRadius: '999px',
        border: '1px solid rgba(37, 99, 235, 0.15)',
        color: '#2563eb',
        backgroundColor: 'rgba(219, 234, 254, 0.7)',
        fontWeight: 600,
    },
    mainContent: {
        display: 'flex',
        gap: '32px',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },

    // --- Product List Styles ---
    productList: {
        flex: '3 1 620px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
    },

    // --- Product Card Styles ---
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 16px 35px rgba(15, 23, 42, 0.08)',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #e5e7eb',
        position: 'relative',
    },
    cardHover: {
        transform: 'translateY(-6px)',
        boxShadow: '0 22px 45px rgba(15, 23, 42, 0.12)',
        borderColor: '#bfdbfe',
    },
    cardTag: {
        position: 'absolute',
        top: '12px',
        left: '12px',
        background: 'rgba(37, 99, 235, 0.92)',
        color: '#ffffff',
        fontSize: '0.7rem',
        padding: '4px 10px',
        borderRadius: '999px',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        fontWeight: 600,
        boxShadow: '0 8px 20px rgba(37, 99, 235, 0.55)',
    },
    cardImage: (url) => ({
        width: '100%',
        height: '210px',
        backgroundImage: url(${url}),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '1px solid #e5e7eb',
    }),
    cardBody: {
        padding: '14px 16px 16px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px',
    },
    productTitle: {
        fontSize: '1.05rem',
        fontWeight: '700',
        color: '#111827',
        marginBottom: '4px',
    },
    productMetaRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '4px',
        gap: '6px',
    },
    productBadge: {
        fontSize: '0.75rem',
        color: '#2563eb',
        backgroundColor: 'rgba(219, 234, 254, 0.8)',
        padding: '2px 8px',
        borderRadius: '999px',
        fontWeight: 600,
    },
    productPrice: {
        fontSize: '1.1rem',
        color: '#2563eb',
        fontWeight: '800',
    },
    productDescription: {
        fontSize: '0.86rem',
        color: '#6b7280',
        marginBottom: '6px',
        lineHeight: 1.5,
    },
    addButtonRow: {
        marginTop: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
    },
    addButton: {
        backgroundImage: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        color: '#fff',
        border: 'none',
        padding: '9px 12px',
        borderRadius: '999px',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '0.9rem',
        letterSpacing: '.04em',
        textTransform: 'uppercase',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease',
        flexGrow: 1,
        boxShadow: '0 10px 20px rgba(37, 99, 235, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
    },
    addButtonHover: {
        transform: 'translateY(-1px)',
        boxShadow: '0 16px 30px rgba(37, 99, 235, 0.55)',
        opacity: 0.96,
    },
    subtleNote: {
        fontSize: '0.74rem',
        color: '#9ca3af',
        whiteSpace: 'nowrap',
    },

    // --- Cart Styles ---
    cartSidebar: {
        flex: '1 1 280px',
        backgroundColor: '#ffffff',
        borderRadius: '18px',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.1)',
        padding: '18px 18px 20px',
        height: 'fit-content',
        position: 'sticky',
        top: '18px',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    h2: {
        fontSize: '1.3rem',
        color: '#111827',
        fontWeight: '800',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
    },
    cartTag: {
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        letterSpacing: '.16em',
        color: '#6b7280',
    },
    cartCountPill: {
        fontSize: '0.8rem',
        padding: '2px 9px',
        borderRadius: '999px',
        backgroundColor: '#eff6ff',
        color: '#1d4ed8',
        fontWeight: 600,
    },
    cartItemList: {
        marginTop: '12px',
    },
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px dashed #e5e7eb',
        gap: '10px',
    },
    cartThumb: (url) => ({
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        backgroundImage: url(${url}),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexShrink: 0,
        boxShadow: '0 6px 15px rgba(15, 23, 42, 0.15)',
        border: '1px solid #e5e7eb',
    }),
    cartItemDetails: {
        flexGrow: 1,
        marginRight: '6px',
    },
    itemTitle: {
        fontWeight: 600,
        fontSize: '0.9rem',
        color: '#111827',
        marginBottom: '2px',
    },
    itemPrice: {
        fontSize: '0.8rem',
        color: '#6b7280',
    },
    removeButton: {
        backgroundColor: 'rgba(248, 250, 252, 0.9)',
        border: '1px solid rgba(239, 68, 68, 0.25)',
        color: '#ef4444',
        padding: '4px 9px',
        borderRadius: '999px',
        cursor: 'pointer',
        transition: 'background-color 0.2s, color 0.2s, transform 0.1s',
        fontSize: '0.8rem',
        whiteSpace: 'nowrap',
        fontWeight: 600,
    },
    removeButtonHover: {
        backgroundColor: '#ef4444',
        color: '#fff',
        transform: 'translateY(-1px)',
    },
    cartTotal: {
        paddingTop: '14px',
        marginTop: '8px',
        borderTop: '1px solid #e5e7eb',
        fontSize: '1.05rem',
        fontWeight: 700,
        display: 'flex',
        justifyContent: 'space-between',
        color: '#111827',
        alignItems: 'center',
    },
    totalLabel: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '0.8rem',
        textTransform: 'uppercase',
        letterSpacing: '.16em',
        color: '#9ca3af',
    },
    totalAmount: {
        fontSize: '1.3rem',
        color: '#111827',
    },
    checkoutButton: {
        backgroundImage: 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#fff',
        width: '100%',
        padding: '11px 14px',
        borderRadius: '999px',
        border: 'none',
        marginTop: '14px',
        fontSize: '0.95rem',
        cursor: 'pointer',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease',
        fontWeight: 700,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        boxShadow: '0 14px 28px rgba(22, 163, 74, 0.5)',
    },
    checkoutButtonHover: {
        transform: 'translateY(-1px)',
        boxShadow: '0 18px 34px rgba(22, 163, 74, 0.65)',
        opacity: 0.97,
    },
    checkoutNote: {
        fontSize: '0.75rem',
        color: '#9ca3af',
        textAlign: 'center',
        marginTop: '4px',
    },
    emptyCartMessage: {
        textAlign: 'center',
        color: '#9ca3af',
        padding: '20px 0',
        fontSize: '0.9rem',
    },
    emptyCartIcon: {
        fontSize: '1.9rem',
        marginBottom: '8px',
        opacity: 0.7,
    },
    // Responsive-ish tweaks handled by flex-wrap and flex-basis – no media queries needed
};


// --- MOCK PRODUCT DATA ---
const productsData = [
    {
        id: 1,
        name: 'Classic Denim Jacket',
        price: 89.99,
        description: 'A timeless light-wash denim jacket with bronze hardware and a relaxed fit that works all year round.',
        imageUrl: "image/Product_1.jpg",
        tag: 'Bestseller',
    },
    {
        id: 2,
        name: 'Striped Cotton Tee',
        price: 24.5,
        description: 'Soft organic cotton tee with subtle stripes — perfect for everyday layering and casual looks.',
        imageUrl: "image/Product_2.jpg",
        tag: 'Everyday',
    },
    {
        id: 3,
        name: 'High-Waisted Slim Jeans',
        price: 69.0,
        description: 'Flattering slim fit with a comfy stretch and classic indigo wash that pairs with anything.',
        imageUrl: "image/Product_3.jpg",
        tag: 'Essential',
    },
    {
        id: 4,
        name: 'Floral Maxi Dress',
        price: 119.99,
        description: 'Flowy maxi dress with a vibrant floral print and adjustable straps for a perfect summer look.',
        imageUrl: "image/Product_4.jpg",
        tag: 'New',
    },
    {
        id: 5,
        name: 'Minimalist Leather Sneakers',
        price: 135.0,
        description: 'Premium white leather sneakers with a cushioned sole and ultra-clean silhouette.',
        imageUrl: "image/Product_5.jpg",
        tag: 'Premium',
    },
    {
        id: 6,
        name: 'Oversized Knit Sweater',
        price: 79.99,
        description: 'Warm wool-blend knit with an oversized fit — ideal for chilly evenings and cozy days.',
        imageUrl: "image/Product_6.jpg",
        tag: 'Cozy',
    },
];

// --- Product Card Component ---
const ProductCard = ({ product, addToCart }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
    };

    const buttonStyle = {
        ...styles.addButton,
        ...(isHovered ? styles.addButtonHover : {}),
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.cardImage(product.imageUrl)} role="img" aria-label={Image of ${product.name}} />
            <span style={styles.cardTag}>{product.tag || 'Featured'}</span>

            <div style={styles.cardBody}>
                <div>
                    <div style={styles.productMetaRow}>
                        <h3 style={styles.productTitle}>{product.name}</h3>
                        <span style={styles.productBadge}>In stock</span>
                    </div>
                    <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
                    <p style={styles.productDescription}>{product.description}</p>
                </div>

                <div style={styles.addButtonRow}>
                    <button
                        style={buttonStyle}
                        onClick={() => addToCart(product)}
                    >
                        <span>➕ Add to Cart</span>
                    </button>
                    <span style={styles.subtleNote}>Tap to preview in cart</span>
                </div>
            </div>
        </div>
    );
};

// --- Cart Item Component ---
const CartItem = ({ item, index, removeFromCart }) => {
    const [isRemoveHovered, setIsRemoveHovered] = useState(false);

    const removeButtonStyle = {
        ...styles.removeButton,
        ...(isRemoveHovered ? styles.removeButtonHover : {}),
    };

    return (
        <div style={styles.cartItem}>
            <div style={styles.cartThumb(item.imageUrl)} />
            <div style={styles.cartItemDetails}>
                <div style={styles.itemTitle}>{item.name}</div>
                <div style={styles.itemPrice}>${item.price.toFixed(2)}</div>
            </div>
            <button
                style={removeButtonStyle}
                onClick={() => removeFromCart(index)}
                onMouseEnter={() => setIsRemoveHovered(true)}
                onMouseLeave={() => setIsRemoveHovered(false)}
            >
                Remove
            </button>
        </div>
    );
};

// --- Cart Component ---
const Cart = ({ cart, removeFromCart }) => {
    const total = useMemo(
        () => cart.reduce((sum, item) => sum + item.price, 0),
        [cart]
    );

    const [isCheckoutHovered, setIsCheckoutHovered] = useState(false);

    const checkoutButtonStyle = {
        ...styles.checkoutButton,
        ...(isCheckoutHovered ? styles.checkoutButtonHover : {}),
    };

    const handleCheckout = () => {
        if (cart.length > 0) {
            alert((Demo) Proceeding to checkout for $${total.toFixed(2)}.);
        } else {
            alert('Your cart is empty!');
        }
    };

    return (
        <aside style={styles.cartSidebar}>
            <div style={styles.h2}>
                <span>Cart Overview</span>
                <span style={styles.cartCountPill}>{cart.length} items</span>
            </div>
            <span style={styles.cartTag}>Your selection</span>

            {cart.length === 0 ? (
                <div style={styles.emptyCartMessage}>
                    <div style={styles.emptyCartIcon}>🛒</div>
                    Your cart is empty. Start adding your favorites!
                </div>
            ) : (
                <>
                    <div style={styles.cartItemList}>
                        {cart.map((item, index) => (
                            <CartItem
                                key={${item.id}-${index}}
                                item={item}
                                index={index}
                                removeFromCart={removeFromCart}
                            />
                        ))}
                    </div>

                    <div style={styles.cartTotal}>
                        <div style={styles.totalLabel}>
                            <span>Total</span>
                            <span>Inclusive of all items</span>
                        </div>
                        <span style={styles.totalAmount}>${total.toFixed(2)}</span>
                    </div>

                    <button
                        style={checkoutButtonStyle}
                        onClick={handleCheckout}
                        onMouseEnter={() => setIsCheckoutHovered(true)}
                        onMouseLeave={() => setIsCheckoutHovered(false)}
                    >
                        Checkout Demo
                    </button>
                    <p style={styles.checkoutNote}>
                        * Demo only — no real payment is processed.
                    </p>
                </>
            )}
        </aside>
    );
};


// --- Main App Component ---
export default function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (indexToRemove) => {
        setCart((prevCart) =>
            prevCart.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <div style={styles.appContainer}>
            <header style={styles.header}>
                <h1 style={styles.h1}>Suriya Fashion</h1>
                
                <p style={styles.subtitle}>
                    Curated edits of everyday essentials 
                </p>
                <div style={styles.headerBadgeRow}>
                    <span style={styles.chip}>6 curated pieces</span>
                    <span style={styles.chip}>Discount Sale</span>
                    <span style={styles.chip}>Daily Offers</span>
                </div>
            </header>

            <div style={styles.mainContent}>
                {/* Product Listing Section */}
                <section style={styles.productList}>
                    {productsData.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </section>

                {/* Shopping Cart Section */}
                <Cart cart={cart} removeFromCart={removeFromCart} />
            </div>
        </div>
    );
}

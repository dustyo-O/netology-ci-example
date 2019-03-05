export default function calculateTotal(purchases) {
    return purchases.reduce(
        (acc, curr) => acc + curr.price * curr.count,
        0,
    );
}

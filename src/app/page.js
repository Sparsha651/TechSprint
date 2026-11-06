
export default function EntryPage() {

  const images = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
  ];

  return (

    <main style={{
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#073c6b",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>

      {/* Background Image Collage */}

      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "76%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        gap: "12px",
        padding: "10px",
        boxSizing: "border-box"
      }}>

        {images.map((image, index) => (

          <div
            key={index}
            style={{
              backgroundImage: `url(${image}?auto=format&fit=crop&w=500&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%"
            }}
          />

        ))}

      </div>


      {/* Blue Overlay */}

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(3,35,65,0.72), rgba(3,55,99,0.88), #073c6b)",
        zIndex: 1
      }} />


      {/* Logo */}

      <div style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        paddingTop: "100px"
      }}>

        <h1 style={{
          color: "white",
          fontSize: "clamp(38px, 9vw, 58px)",
          fontWeight: "500",
          margin: 0,
          letterSpacing: "-2px"
        }}>

          House
          <span style={{
            color: "#f16f73",
            fontWeight: "bold",
            fontSize: "1.1em"
          }}>
            
          eEazy
          </span>

        </h1>

      </div>


      {/* Login Section */}

      <section style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        padding: "25px",
        paddingBottom: "35px",
        boxSizing: "border-box",
        marginTop: "auto"
      }}>

        <h2 style={{
          color: "#dce8f5",
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "16px"
        }}>
          Login or Signup
        </h2>


        {/* Mobile Number Input */}

        <input
          type="tel"
          placeholder="Mobile number"
          maxLength={10}
          style={{
            width: "100%",
            height: "75px",
            padding: "0 25px",
            borderRadius: "18px",
            border: "none",
            outline: "none",
            backgroundColor: "white",
            color: "#333",
            fontSize: "23px",
            boxSizing: "border-box"
          }}
        />


        {/* Terms and Conditions */}

        <p style={{
          color: "#b6cce1",
          fontSize: "17px",
          marginTop: "38px",
          marginBottom: "48px",
          lineHeight: "1.5"
        }}>

          By continuing, I agree to the{" "}

          <a
            href="#"
            style={{
              color: "#5799d6",
              textDecoration: "none"
            }}
          >
            Terms and Conditions.
          </a>

        </p>


        {/* Send OTP Button */}

        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>

          <button
            type="button"
            style={{
              width: "200px",
              height: "70px",
              border: "none",
              borderRadius: "15px",
              backgroundColor: "#ef7372",
              color: "white",
              fontSize: "23px",
              fontWeight: "500",
              cursor: "pointer"
            }}
          >
            Send OTP
          </button>

        </div>

      </section>

    </main>

  );
}

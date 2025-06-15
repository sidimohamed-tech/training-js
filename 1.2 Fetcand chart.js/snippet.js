  const x = [];
          const y = [];
          lines.forEach((line) => {
            const columns = line.split(",");
            x.push(columns[0]);
            y.push(columns[1]);
            console.log(columns);
          });
          console.log(x);
          console.log(y);